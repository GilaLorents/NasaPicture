import React from 'react'
import ReactDom from 'react-dom'
import Login from './component/login'
import History from './component/history'
import Register from './component/register'
import Nasa from './component/nasa'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

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

export function Home(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
          </div>
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/Register"> Register </Link>
          </div>
          {/* <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/NasePicture"> nasa pictures </Link>
          </div> */}
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/History"> History </Link>
          </div>

        </div>
      </div>
    </nav>
  )
}
