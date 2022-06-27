import React, { Component } from 'react'
import { Route , Switch , Redirect , Link } from 'react-router-dom';
export default class Routing extends Component {
    render() {
        return (
            <div>
                Hello Routing
                <Switch>
                    <Route path = "/home/profile" component = {Profile}></Route>
                    <Route path = "/listing" component = {Listing}></Route>
                    <Redirect from = "/home" to = "/"></Redirect>
                    <Route path = "/" exact component = {Home}></Route>

                </Switch>
                <ul>
                    <li><Link to = "/home/profile">Profile</Link></li>
                    <li><Link to = "/listing">Listing</Link></li>
                </ul>
                
            </div>
        )
    }
}
class Home extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
class Profile extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

class Listing extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
class Error extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

