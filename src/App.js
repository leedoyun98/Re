import React, {useState} from 'react'
import JsonData from './config/data.json'
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom'
import {Provider} from'react-redux'
import PropTypes from 'prop-types'
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import  rootReducer  from './root.reducer'
import {MainPage } from './cmm/pages/index'
import { UserLoginPage, UserJoinPage, UserDetailPage, UserUpdatePage, UserListPage} 
from './uss/pages/index'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import RdeuxThunk from 'redux-thunk'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

const App=() =>(<>
<Provider store = {store}>
  <Router>
    <Switch>
      <Route exact path='/' component={MainPage}/>
                <Route path='/user-login' component={UserLoginPage}/>
                <Route path='/user-join' component={UserJoinPage}/>
                <Route path='/user-detail' component={UserDetailPage}/>
                <Route path='/user-list' component={UserListPage}/>
                <Route path='/user-update' component={UserUpdatePage}/>
                <Route component={Error}/> 
    </Switch>
   </Router>
   </Provider>
  </>)


export default App

