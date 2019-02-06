import React, {Component} from 'react'
import Axios from 'axios'

import CustomerCard from '../containers /customerCard'
import GuestProfile from './guestProfile'

export default class GuestBook extends Component{



    state = {
        customers: [],
        showPage: null
    }

    
    componentDidMount(){
        Axios.get('http://localhost:3001/guests')
        .then(res => this.setState({
            customers: res.data
        }))
    }
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    showProfile = () => {
        this.setState({
            showPage: true
        })
    }

    exitProfile = () => {
        this.setState({
            showPage: null
        })
    }

    render(){

        return(
            <div>
                <div> This is the guest book component test for github</div>
                {this.state.showPage === null ? this.state.customers.map(customer => 
                    <CustomerCard 

                        clickHandler={this.showProfile} 
                        info={customer}/>) : 

                    <GuestProfile goBack={this.exitProfile}/>}
                
            </div>
        )
    }
}
 