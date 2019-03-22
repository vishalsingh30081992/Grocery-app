import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.css';

export default class Home extends Component {

    render() {
        return (
            <div className="home-container">
                <h1>Welcome to Grocery App!!</h1>
                <h4>Click Login to continue!!</h4>
                <Link to="/create">
                    <button class="btn btn-primary login-btn" onClick={this.redirectToCreatePage}>Login</button>
                </Link>
            </div>
        )
    }
}