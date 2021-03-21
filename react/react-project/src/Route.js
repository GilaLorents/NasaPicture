import React from 'react'
import Login from './component/login'
import History from './component/history'
import Register from './component/register'
import Nasa from './component/nasa'
import Home from './component/home'


import {
  BrowserRouter as Router,
  Switch,
  Route,


} from 'react-router-dom'
export function MyRoute(props) {
  return (
    <div>
      <Home />
      <Switch>
        <Route path="/Login">
          <Login></Login>
        </Route>
        <Route path="/Register">
          <Register></Register>
        </Route>Order
        <Route path="/NasePicture">
          <Nasa></Nasa>
        </Route>
        <Route path="/History">
          <History></History>
        </Route>
      </Switch>
    </div>

  )
}


