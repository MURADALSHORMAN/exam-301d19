'use strict';


import axios from 'axios';
import React, { Component } from 'react'

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: process.env.REACT_APP_URL,
            data: [],
        };
    };

    componentDidMount = async () => {

        const APIdata = await axios.get(`${this.state.url}/get-characters`);

        this.setState({
            data: APIdata.data,
        });
        console.log(this.state.data);
    };

     savedata= async(event,data)=>{
        event.preventDefault();
         const{name,id,gender,psiPowers }=data
        const saveNewdata = await axios.post(`${this.state.url}/favorite`,{name,id,gender,psiPowers });
       console.log(saveNewdata.data);
    }
    render() {
        return (
            this.state.data.map(data => {
                return <div>    <>
                {
                   
                     <form>
                         <button onClick={event=>{this.savedata(event,data)}}> save to favorites</button>
                         <h1>{data.name}</h1>
                         <p>{data.gender}</p>
                         <img src={data.img} alt='' />
                         {
                             data.psiPowers.map(data => {
                                 return <p> {data.psiPowers}</p>
                             })
                         }
                     </form>
                } 
                 </></div>
            


            })
        )
    }
}

export default Main
