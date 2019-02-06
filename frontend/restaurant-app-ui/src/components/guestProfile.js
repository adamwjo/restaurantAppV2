import React, { Component } from 'react'
import Axios from 'axios'
import { Grid, Segment, Header, Icon, List, Button } from 'semantic-ui-react'


export default class GuestProfile extends Component {


    state = {
        currentGuest: []
    }
    

    componentDidMount(){
        Axios.get(`http://localhost:3001/guests/${this.props.guestId}`)
            .then(res => {
                this.setState({
                    currentGuest: res.data
                })
            })
    }




    render(){
        const guest = this.state.currentGuest

        return(
            <Grid  celled='internally' columns='equal'>

                <Grid.Row>
                    <Grid.Column>
                        <Segment>
                            <Header as='h2'>
                                <Icon name='id card'/>
                                <Header.Content>Guest Profile</Header.Content>
                            </Header>
                            <Header as='h2'>
                                <Header.Content>{`${guest.first_name}, ${guest.last_name}`}</Header.Content>
                            </Header>
                                <button onClick={() => {this.props.goBack()}}>Go Back</button>
                            
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>2</Segment>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Header as='h2'>
                            <Header.Content>Guest Reservations</Header.Content>
                        </Header>
                            {guest.reservations ? guest.reservations.map(reservation => 

                        <List celled>
                                <List.Item>{reservation.date}, {reservation.time}</List.Item>
                                <Button color='teal'>Edit</Button>
                        </List>

                            ) : null }
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        )
    }
}