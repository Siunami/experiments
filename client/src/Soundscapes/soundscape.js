import React, { Component } from 'react';
import './soundscape.css';

import ocean from './ocean.jpg';
import oceanSound from './beach.mp3';

import trees from './trees.jpg';
import forestSound from './forest.mp3';

import city from './city.jpg';
import trafficSound from './traffic.mp3'

import ReactAudioPlayer from 'react-audio-player';

function Ocean(){
    return (
        <div>
            <ReactAudioPlayer
            src={oceanSound}
            autoPlay
            loop
            />
            <img className="image" src={ocean} alt="Ocean" />
        </div>
    )
}

function Birds(){
    return (
        <div>
            <ReactAudioPlayer
            src={forestSound}
            autoPlay
            loop
            />
            <img className="image" src={trees} alt="trees" />
        </div>
    )
}

function City(){
    return (
        <div>
            <ReactAudioPlayer
            src={trafficSound}
            autoPlay
            loop
            />
            <img className="image" src={city} alt="grains" />
        </div>
    )
}

export default class Soundscape extends Component {
    constructor(props){
        super(props)
        this.state = {
            selection: 1,
            max: 3
        }
        this.decrementSelector = this.decrementSelector.bind(this);
        this.incrementSelector = this.incrementSelector.bind(this);
    }

    decrementSelector(){
        let newSelection = this.state.selection == 1 ? this.state.max : this.state.selection - 1;
        this.setState((prev,curr) => ({
            selection: newSelection
        }))
    }

    incrementSelector(){
        let newSelection = this.state.selection == 3 ? 1 : this.state.selection + 1;
        this.setState((prev,curr) => ({
            selection: newSelection
        }))
    }

    render(){
        let experience;
        if (this.state.selection == 1){
            experience = <Ocean/>
        } else if (this.state.selection == 2) {
            experience = <Birds/>
        } else if (this.state.selection == 3) {
            experience = <City/>
        }
        return (
            <div>
                <h2>Soundscape</h2>
                {experience}
                <br/>
                <button onClick={this.decrementSelector}>←</button>
                <span> Image {this.state.selection} </span>
                <button onClick={this.incrementSelector}>→</button>
            </div>
        )
    }
}