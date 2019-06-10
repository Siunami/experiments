import React, { Component } from 'react';

import axios from 'axios';

export default class PythonProcess extends Component {
    constructor(){
        super()
    }

    componentDidMount(){
        axios.get('/api/pythonprocess').then(res => {
            console.log(res)
        })
    }

    render(){
        return (
            <div>
                <p>PythonProcess</p>
            </div>
        )
    }
}