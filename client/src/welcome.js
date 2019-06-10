import React, { Component } from 'react';

import './App.css';

export default class Welcome extends Component {
    constructor(){
        super()
    }

    render(){
        return (
            <div class="welcome-container">
                <p>Hey there! Thanks for stopping by.</p>
                <p>This is an experimental site for small projects and to share what I'm learning</p>
                <p>Take a look around! Hope you find something interesting here.</p>
                <p>I recommend starting with <a href="/hello/">Hello! 👋</a></p>
            </div>
        )
    }
}