import React, { Component } from 'react';
import axios from 'axios';

import { Jumbotron,InputGroup, Input, Button } from 'reactstrap';

export default class First extends Component {
    constructor(){
        super()
        this.state = {
            data:[],
            name:""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        axios.get('/api/first').then(res => {
            console.log(res);
            this.setState((prev,curr) => ({ 
                data:res.data
            }))
        })
    }

    handleClick(event){
        event.preventDefault();
        console.log("got here");
        console.log(this.state.name);
        axios.post('/api/first/new',{"name":this.state.name}).then((req,res) => {
            console.log(req);
        })
    }

    handleChange(event){
        this.setState({name: event.target.value});
    }

    render(){
        return (
            <div>
                <Jumbotron>
                    <p>Thanks for checking out my site! Hope you found something interesting.</p>
                    <p>Feel free to add your name and a comment in the log book</p>

                    <InputGroup className="md-6">
                        <Input value={this.state.name} onChange={this.handleChange} placeholder="name"/>
                    </InputGroup>
                    <p className="lead">
                        <Button color="primary" onClick={this.handleClick}>Submit</Button>
                    </p>
                </Jumbotron>
                <h3>Logbook</h3>
                {this.state.data.map((d,id) => {
                    return <p key={id}>{d.text}</p>
                })}
            </div>
        )
    }
}