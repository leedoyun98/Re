import React,{useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import {debounce} from 'throttle-debounce'

export const UserLoginPage = () => {
    const test = e =>{
        e.preventDefault()
        alert(`click`)
        axios.get(`http://localhost:8080/test`)
        .then(response =>{
            alert(`${JSON.stringify(response.data)}`)
        })
    }
    return (<>
        <button onClick={test}>Hello Boot !!!!!!!!!!</button>
    </>)
}