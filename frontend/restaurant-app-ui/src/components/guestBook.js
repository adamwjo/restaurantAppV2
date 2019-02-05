import React, {Component} from 'react'
import Axios from 'axios'

import CustomerCard from '../containers /customerCard'

export default class GuestBook extends Component{



    state = {
        customers: [],
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    componentDidMount(){
        Axios.get('http://localhost:3001/guests')
            .then(res => this.setState({
                customers: res.data
            }))
    }


    render(){

        return(
            <div>
                <div> This is the guest book component test for github</div>
                {this.state.customers.map(customer => <CustomerCard info={customer}/>)}
                
            </div>
        )
    }
}