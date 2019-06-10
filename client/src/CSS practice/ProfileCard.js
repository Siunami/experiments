import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './practice.css';
import profile from './profile.jpg';

export default class ProfileCard extends Component {
    constructor(){
        super()

    }

    render(){
        return (
            <div>
                <div class="card-bg">
                    <div class="card">
                        <div class="left-card">
                            <img id="profile-photo" src={profile} alt="Profile Photo"/>
                            <h3 id="profile-name">Matthew Siu</h3>
                            <p id="profile-desc">Creator</p>
                            <div class="profile-button-wrapper">
                                <button id="profile-button">Follow</button>
                                <button id="profile-button">Message</button>
                            </div>
                        </div>
                        <div class="right-card">
                            <div class="stats-card">
                                <h3>523</h3>
                                <p>Posts</p>
                            </div>
                            <div class="stats-card middle">
                                <h3>1234</h3>
                                <p>Likes</p>
                            </div>
                            <div class="stats-card bottom">
                                <h3>123</h3>
                                <p>Followers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/practiceCSS/landing/"><button id="profile-button">Next</button></Link>
            </div>
        )
    }
}