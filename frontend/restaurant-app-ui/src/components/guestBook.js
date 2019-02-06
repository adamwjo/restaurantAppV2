import React, {Component} from 'react'
import Axios from 'axios'

import CustomerCard from '../containers /customerCard'
import GuestProfile from './guestProfile'

export default class GuestBook extends Component{



    state = {
        customers: [],
        showPage: null,
        guestId: null
    }

    
    componentDidMount(){
        Axios.get('http://localhost:3001/guests')
        .then(res => this.setState({
            customers: res.data
        }))
    }
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    showProfile = (id) => {
        this.setState({
            showPage: true,
            guestId: id
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

                        showProfile={this.showProfile} 
                        info={customer}/>) : 

                    <GuestProfile guestId={this.state.guestId} goBack={this.exitProfile}/>}
                
            </div>
        )
    }
}
 