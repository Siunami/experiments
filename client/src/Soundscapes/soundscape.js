import React, { Component } from 'react';

import ocean from './ocean.jpg';
import './soundscape.css';
import oceanSound from './beach.mp3';

import ReactAudioPlayer from 'react-audio-player';

export default class Soundscape extends Component {
    render(){
        return (
            <div>
                <h2>Soundscape</h2>
                <ReactAudioPlayer
                src={oceanSound}
                autoPlay
                loop
                />
                <img className="image" src={ocean} alt="Ocean" />
            </div>
        )
    }
}