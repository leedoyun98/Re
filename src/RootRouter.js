import React from 'react'
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom'
import {Provider} from'react-redux'
import PropTypes from 'prop-types'
import { createStore } from 'redux'
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import { rootReducer } from './root.reducer'
import { MainPage } from './MainPage'
import { UserLoginPage, UserJoinPage, UserDetailPage, UserUpdatePage, UserListPage} from './uss/pages/index'



export const RootRouter = () => {
    return (<>
    <Provider store={createStore(rootReducer)}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route path='/user-login' component={UserLoginPage}/>
                <Route path='/user-join' component={UserJoinPage}/>
                <Route path='/user-detail' component={UserDetailPage}/>
                <Route path='/user-list' component={UserListPage}/>
                <Route path='/user-update' component={UserUpdatePage}/>
                <Route component={Error}/> 
            </Switch>
        </BrowserRouter>
    </Provider>
    </>)
}