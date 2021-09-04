import React from 'react'
import logo from '../assets/logo.svg'
import person from '../assets/ic_person.svg'

const Navbar = () => {
    return (
        <header className={'header'}>
            <a href='/' className="header__left">
                <img src={logo} alt="logo" className={'logo header__image'}/>
                <span className="header__left_text">Wrench CRM</span>
            </a>
            <div className="header__right">
                <img src={person} alt="header__image" className={'person header__image'}/>
                <span className="header__right_text">Имя Фамилия</span>
            </div>

        </header>
    )
}

export default Navbar
