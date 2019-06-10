import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'moment';

import './first.css';

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
            <div className="guest-wrapper">
                <div className="guest-form">
                    <h3>Hello! 👋</h3>
                    <p>Feel free to add your name and a comment in the guest book</p>
                    <input value={this.state.name} onChange={this.handleChange} placeholder="name"/>
                    <textarea rows="4" value={this.state.comment} onChange={this.handleCommentChange} placeholder="comment"/>
                    <p className="lead">
                        <button onClick={this.handleClick}>Submit</button>
                    </p>
                </div>
                <div className="guest-book">
                    <h3>Guest Book</h3>
                    <div className="posts">
                    {this.state.data.map((d,id) => {
                        return (
                            <div className="post-card" key={id}>
                                <h4>{d.name}</h4>
                                <p>{d.comment}</p>
                                <span>{Moment(d.time).format("MM-DD-YYYY")}</span>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        )
    }
}