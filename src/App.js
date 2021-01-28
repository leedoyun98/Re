import React, {useState} from 'react'
import { RootRouter } from './RootRouter'
import { UserLoginPage } from './uss/pages/index'
import JsonData from './config/data.json'

export default function App() {
  const [ landingPageData, setLandingPage ] = useState({})
  const getLandingPage = () => { setLandingPage(JsonData) }
  return (
   <div><UserLoginPage/></div> 
  )

}


