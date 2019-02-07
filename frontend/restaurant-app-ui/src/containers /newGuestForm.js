import React, { Component } from 'react'
import Axios from 'axios'
import { Button, Header, Icon, Modal, Form, Menu } from 'semantic-ui-react'

export default class NewGuestForm extends Component {
    state = {
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        address: ''
    }

    submitGuestInfo = () => {
        const guest = this.state
        Axios.post('http://localhost:3001/guests', {
            first_name: guest.first_name,
            last_name: guest.last_name,
            phone_number: guest.phone_number,
            email: guest.email,
            address: guest.address
        })
    }

    render(){
        return(
          <Modal trigger={<Menu.Item name='Add a New Guest'>Add a New Guest</Menu.Item>} basic size='small'>
            <Header icon='profile' content='Add Guest Information' />
            <Modal.Content>
              <Form>
                  <Form.Group>
                      <Form.Input 
                        onChange={(e) => this.setState({first_name: e.target.value})} 
                        label='First Name' 
                        placeholder='First Name'/>
                      <Form.Input 
                        onChange={(e) => this.setState({last_name: e.target.value})}
                        label='Last Name' 
                        placeholder='Last Name'/>
                  </Form.Group>
                  <Form.Group>
                      <Form.Input
                        onChange={(e) => this.setState({phone_number: e.target.value})}
                        label='Phone Number' 
                        placeholder='(xxx)xxx-xxxx'/>
                      <Form.Input
                        onChange={(e) => this.setState({email: e.target.value})} 
                        label='Email Address' 
                        placeholder='Email Address'/>
                      <Form.Input
                        onChange={(e) => this.setState({address: e.target.value})} 
                        label='Home Address' 
                        placeholder='Home Address'/>
                  </Form.Group>
                  <Form.Button onClick={() => this.submitGuestInfo()} color='green'>Submit</Form.Button>
              </Form>
            </Modal.Content>
          </Modal>
        )
    }
}

