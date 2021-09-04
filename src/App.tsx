import * as React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Home from "./pages/Home"
import Search from "./pages/Search"
import * as Pages from './pages/Pages'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Sidebar/>
            <div className='main'>
                <Switch>
                    <Route path={'/address'} component={Search}/>
                    <Route path={'/tables'} component={Pages.Tables}/>
                    <Route path={'/calendar'} component={Pages.Calendar}/>
                    <Route path={'/maps'} component={Pages.Maps}/>
                    <Route path={'/widgets'} component={Pages.Widgets}/>
                    <Route path={'/profile/settings'} component={Pages.ProfileSettings}/>
                    <Route path={'/profile/finance'} component={Pages.FinanceSettings}/>
                    <Route path={'/'} exact component={Home}/>
                </Switch>
            </div>


        </BrowserRouter>
    )
}

export default App
