import React, {useState} from 'react'
import SearchIcon from '../assets/ic_search_button.svg'
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

interface IAddresses {
    "value": string,
    "unrestricted_value": string,
    "data": {
        kladr_id?: string
    }
}

const Search = () => {
    const [query, setQuery] = useState('')
    const [answer, setAnswer] = useState([])
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address"
    const token = "db73e8efdcd7615e282890255b7ad11f453a0460"
    const options: RequestInit = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token " + token,
        },
        body: JSON.stringify({
            query: query,
            count: 20
        })
    }

    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value)
    }

    async function clickHandler(event: any) {

        event.preventDefault()
        if (query.length < 3) {
            return
        }
        try {
            const response = await fetch(url, options)
            const data = await response.json()
            setAnswer(data.suggestions)
        } catch (e) {
            console.log('fetching error: ', e)
        }

    }

    return (
        <>
            <h1 className='wrench__h1'>Поиск адресов</h1>
            <p className='wrench__subtitle'>Введите интересующий вас адрес</p>
            <div
                className='search'
            >
                <input
                    name='address'
                    className='search__input'
                    type="text"
                    placeholder='Введите интересующий вас адрес'
                    onChange={onChangeHandler}
                    ref={input => input?.focus()}
                />
                <button
                    disabled={query.length < 3}
                    type='submit'
                    className='search__button'
                    onClick={clickHandler}
                >
                    <img src={SearchIcon} alt="Поиск адресов" className='search__icon'/>

                    Поиск
                </button>
            </div>
            {answer.length > 0 &&
            <div className='search__result'>
              <h1 className='wrench__h1 wrench__h1_search'>Адреса</h1>
              <ul>
                  {answer.map((item: IAddresses) => (
                          <li
                              className='search__result_item'
                              key={item.data.kladr_id}
                          >{item.value}</li>
                      )
                  )}
              </ul>
            </div>}
        </>
    )
}

export default Search
