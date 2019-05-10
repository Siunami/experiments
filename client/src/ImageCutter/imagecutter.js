import React, { Component } from 'react';
import axios from 'axios';

import { InputGroup, Input,InputGroupAddon, InputGroupText, Button } from 'reactstrap';

export default class ImageCutter extends Component {
    constructor(props){
        super(props)
        this.state = {
            images: [],
            url:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    updateImageData(url=""){
        axios.get("/api/imagecutter/" ,{
            params: {
                url: url
            }
          }).then(res => {
            console.log(res);
            this.setState((prev,curr) => ({
                images:res.data
            }))
        })
    }
    
    componentDidMount(){
        this.updateImageData("https://en.wikipedia.org/wiki/Wikipedia")
        this.setState({url:"Wikipedia"})
    }

    handleChange(event){
        console.log(event.target.value);
        this.setState({
            url:event.target.value
        })
    }

    handleClick(event){
        if (this.state.url != ""){
            this.updateImageData("https://en.wikipedia.org/wiki/" + this.state.url)
        }
    }

    render(){
        let AllImages = this.state.images.map((v,i) => {
            return (
                <div key={i}>
                    <img src={v}></img>
                </div>
            )
        })
        return(
            <div>
                <br/>
                <p>Input a wikipedia topic and get all images from the page</p>
                <InputGroup className="md-6">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>www.wikipedia.org/wiki/</InputGroupText>
                    </InputGroupAddon>
                    <Input value={this.state.url} onChange={this.handleChange} placeholder="wikipedia topic"/>
                </InputGroup>
                <br/>
                <p className="lead">
                    <Button color="primary" onClick={this.handleClick}>Submit</Button>
                </p>
                {AllImages}
            </div>
        )     
    }
}