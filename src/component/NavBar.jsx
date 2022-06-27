import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  
    <Link className="navbar-brand" to = "/">Movies</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <div className = "Navbar-nav">
        <Link className = "Nav-Link" to = "/login">Login</Link>
        </div>
    </div>
</nav>
        )
    }
}
