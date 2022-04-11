import React from 'react'
import {
  Link
}from "react-router-dom";
// import Spinner1 from './Spinner1';
export default function NavBar() {
  return (
    <div>
      <div>
        <nav className={`fixed-top navbar navbar-expand-lg navbar-dark bg-dark`}>
  <div className="container-fluid">   
    <Link className="navbar-brand" /*{onClick={this.showAlert}}*/ to="/">TanzXpress</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" /*{onClick={this.showAlert}}*/ aria-current="page" to="/">Home</Link>
        </li>
            <li className="nav-item mx-2"><Link className="nav-link" /*{onClick={this.showAlert}}*/ to="/business">Business</Link></li>
            <li className="nav-item mx-2"><Link className="nav-link" /*{onClick={this.showAlert}}*/ to="/entertainment">Entertainment</Link></li>
            <li className="nav-item mx-2"><Link className="nav-link" /*{onClick={this.showAlert}}*/ to="/general">General</Link></li>
            <li className="nav-item mx-2"><Link className="nav-link" /*{onClick={this.showAlert}}*/ to="/health">Health</Link></li>
            <li className="nav-item mx-2"><Link className="nav-link" /*{onClick={this.showAlert}}*/ to="/science">Science</Link></li>
            <li className="nav-item mx-2"><Link className="nav-link" /*{onClick={this.showAlert}}*/ to="/sports">Sports</Link></li>
            <li className="nav-item mx-2"><Link className="nav-link" /*{onClick={this.showAlert}}*/ to="/technology">Technology</Link></li>
            {/* {(this.state.loading)&&<Spinner1/>} */}
        </ul>
        {/* <div className={`form-check mx-2 form-switch text-dark` }>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={()=>{this.props.toggleMode(this.props.mode)}}
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {`${this.props.mode === 'light'?'Enable':'Disable '}`}Dark Mode
            </label>
          </div> */}

      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    </div>
    )
}


