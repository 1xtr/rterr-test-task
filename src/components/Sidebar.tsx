import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import MainIcon from '../assets/ic_main.svg'
import SearchIcon from '../assets/ic_search.svg'
import TablesIcon from '../assets/ic_tables.svg'
import CalendarIcon from '../assets/ic_calendar.svg'
import MapsIcon from '../assets/ic_maps.svg'
import WidgetIcon from '../assets/ic_widgets.svg'
import SettingsIcon from '../assets/ic_settings.svg'
import ProfileSetIcon from '../assets/ic_profile.svg'
import FinanceIcon from '../assets/ic_finance.svg'
import LogoutIcon from '../assets/ic_exit.svg'


const Sidebar = () => {
    const [isActive, setIsActive] = useState(false)

    function clickHandler() {
        setIsActive(!isActive)
    }

    return (
        <aside className='sidebar'>
            <p className='sidebar__title'>Меню</p>
            <menu className='menu'>
                <li>
                    <NavLink exact to="/" className={'nav-link'}>
                        <img src={MainIcon} alt="Главная" className='menu__icon'/>
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/address" className={'nav-link'}>
                        <img src={SearchIcon} alt="Поиск адресов" className='menu__icon'/>
                        Поиск адресов
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/tables' className={'nav-link'}>
                        <img src={TablesIcon} alt="Таблицы" className='menu__icon'/>
                        Таблицы
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/calendar' className={'nav-link'}>
                        <img src={CalendarIcon} alt="Календарь" className='menu__icon'/>
                        Календарь
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/maps' className={'nav-link'}>
                        <img src={MapsIcon} alt="Карты" className='menu__icon'/>
                        Карты
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/widgets' className={'nav-link'}>
                        <img src={WidgetIcon} alt="Виджеты" className='menu__icon'/>
                        Виджеты
                    </NavLink>
                </li>
                <li>
                    <div className={'nav-link expand'} onClick={clickHandler}>
                        <img src={SettingsIcon} alt="Настройки" className='menu__icon'/>
                        Настройки
                    </div>
                    {isActive && <ul>
                      <li>
                        <NavLink exact to='/profile/settings'  className={'nav-link'}>
                          <img src={ProfileSetIcon} alt="Настройки профиля" className='menu__icon'/>
                          Настройки профиля
                        </NavLink>
                      </li>
                      <li>
                        <NavLink exact to='/profile/finance' className={'nav-link'}>
                          <img src={FinanceIcon} alt="Управление финансами" className='menu__icon'/>
                          Управление финансами
                        </NavLink>
                      </li>
                    </ul>}
                </li>
                <li>
                    <div className={'nav-link'}>
                        <img src={LogoutIcon} alt="Выход" className='menu__icon'/>
                        Выход
                    </div>
                </li>
            </menu>

        </aside>
    )
}

export default Sidebar
