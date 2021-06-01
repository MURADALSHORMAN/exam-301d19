'use strict';
import axios from 'axios';

import React, { Component } from 'react'





export class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: process.env.REACT_APP_URL,
            database: [],
        };
    };

    componentDidMount = async () => {

        const APIdata = await axios.get(`${process.env.REACT_APP_URL}/favorite`);

        this.setState({
            database: APIdata.data,
        });
        console.log(this.state.database);
    };

    deletedata= async(event,data)=>{
        event.preventDefault();
         const{name,id,gender,psiPowers }=data
        const newNewdata = await axios.delete(`${this.state.url}/favorite`,{name,id,gender,psiPowers });
       this.setState({        
           database: newNewdata.data,
    });
    }

    updatedata= async(event,data)=>{
        event.preventDefault();
         const{name,id,gender,psiPowers }=data
        const updateNewdata = await axios.put(`${this.state.url}/favorite`,{name,id,gender,psiPowers });
        this.setState({        
            database: updateNewdata.data,
     });
    }

    render() {
        return (
            this.state.database.map(data => {
                return <div>    <>
                    {

                        <form>
                            <button onClick={event => { this.updatedata(event, data) }}> update</button>
                            <button onClick={event => { this.deletedata(event, data) }}> Delete</button>
                            <h1>{data.name}</h1>
                            <p>{data.gender}</p>
                            {
                                data.psiPowers.map(data => {
                                    return <p> {data.psiPowers}</p>
                                })
                            }
                        </form>
                    }
                </></div>
            })
        )}
}

export default Profile
