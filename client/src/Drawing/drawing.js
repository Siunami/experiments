import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';

import sketch from './sketch';

export default class Drawing extends Component {
    render(){
        return (
            <div>
                <h3>Drawing</h3>
                <P5Wrapper sketch={sketch} rotation={200}/>
            </div>
        )
    }
}