import React, { Component } from 'react'


export default class GuestProfile extends Component {
    render(){
        return(
            <div>
                Guest Profile
                <button onClick={() => {this.props.goBack()}}>Go Back</button>
            </div>
        )
    }
}