import React from 'react'
import ParticlesBg from "particles-bg";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AdminLogin } from './AdminLogin';
import Assesment from './Assesment';
import { UserLogin } from './UserLogin';
import { Home } from './Home';

export default function Header(props) {
  return (
    <Router>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
   <Link className="navbar-brand">{props.title}</Link>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ParticlesBg type="circle" bg={true} />
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'/home'} className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'/admin'}  className="nav-link" >Admin Login</Link>
        </li>
        <li className="nav-item">
          <Link to={'/user'}  className="nav-link" >User Login</Link>
        </li>
        <li className="nav-item">
          <Link to={'/Assesment'}  className="nav-link" >Assesment</Link>
        </li>
        </ul>
        {props.searchBar ? <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> : "no search bar"}
    </div>
  </div>
</nav> 
<Switch>
  <Route exact path='/admin' component={AdminLogin} />    
  <Route exact path='/user' component={UserLogin} />
  <Route exact path='/Assesment' component={Assesment} />
  <Route exact path='/home' component={Home} />              
</Switch>
        
</Router>    
  )
}
