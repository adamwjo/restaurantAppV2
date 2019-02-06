import React, { Component } from 'react'
import Axios from 'axios'
import { Grid, Segment, Header, Icon } from 'semantic-ui-react'


export default class GuestProfile extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        Axios.get(`http://localhost:3001/guests/${this.props.guestId}`)
            .then(res => console.log(res))
    }
    render(){
        return(
            <Grid columns='equal'>

                <Grid.Row>
                    <Grid.Column>
                        <Segment>
                            <Header as='h2'>
                                <Icon name='id card'/>
                                <Header.Content>Guest Profile</Header.Content>
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
                        <Segment>
                            <div>
                                Guest Profile
                                <button onClick={() => {this.props.goBack()}}>Go Back</button>
                            </div>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        )
    }
}