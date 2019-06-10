import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'moment';

import { Jumbotron,InputGroup, Input, Button } from 'reactstrap';

export default class First extends Component {
    constructor(){
        super()
        this.state = {
            data:[],
            name:"",
            comment:""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
    }

    getData(){
        axios.get('/api/first').then(res => {
            console.log(res);
            this.setState((prev,curr) => ({ 
                data:res.data
            }))
        })
    }

    componentDidMount(){
        this.getData()
    }

    handleClick(event){
        event.preventDefault();
        if (this.state.name != "" && this.state.comment != ""){
            axios.post('/api/first/new',{"name":this.state.name,"comment":this.state.comment}).then(res => {
                console.log(res);
                this.getData()
                this.setState((prev,curr) => ({
                    name:"",
                    comment:""
                }))
            })
        } else {
            alert("Fill out both parts first!")
        }
    }

    handleCommentChange(event){
        this.setState({comment: event.target.value});
    }

    handleChange(event){
        this.setState({name: event.target.value});
    }

    render(){
        return (
            <div>
                <Jumbotron>
                    <h3>Hello! 👋</h3>
                    <p>Feel free to add your name and a comment in the log book</p>

                    <InputGroup className="md-6">
                        <Input value={this.state.name} onChange={this.handleChange} placeholder="name"/>
                    </InputGroup>
                    <br/>
                    <InputGroup className="md-6">
                        <Input value={this.state.comment} onChange={this.handleCommentChange} placeholder="comment"/>
                    </InputGroup>
                    <br/>
                    <p className="lead">
                        <Button color="primary" onClick={this.handleClick}>Submit</Button>
                    </p>
                </Jumbotron>
                <h3>Logbook</h3>
                {this.state.data.map((d,id) => {
                    return <p key={id}>{d.comment} - {d.name} on {Moment(d.time).format("MM-DD-YYYY")}</p>
                })}
            </div>
        )
    }
}