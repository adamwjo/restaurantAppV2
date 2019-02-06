import React, {Component} from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import GuestBook from '../components/guestBook'



export default class UiMenu extends Component{



    state = {
        activeItem: 'Guest Book'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    

    render(){
        const { activeItem } = this.state

        return(
            <div>
                      <Menu>
                        <Menu.Item
                        name='Super Resto-App'
                        >
                        Super Resto-App
                        </Menu.Item>

                        <Menu.Item 
                        name='reviews'  
                        onClick={(e) => {console.log(e)}}
                        >
                        Add a New Guest
                        </Menu.Item>
                    </Menu>
                <Grid>
                     <Grid.Column width={4}>
                        <Menu fluid vertical tabular>

                            <Menu.Item 
                            name='Guest Book' 
                            active={activeItem === 'Guest Book'} 
                            onClick={this.handleItemClick} />

                            <Menu.Item 
                            name='Floor Plan' 
                            active={activeItem === 'Floor Plan'} 
                            onClick={this.handleItemClick} />

                           
                        </Menu>
                    </Grid.Column>

                    <Grid.Column stretched width={12}>
                        <Segment>
                            {this.state.activeItem === "Guest Book" ? <GuestBook/> : null}
                        </Segment>
                    </Grid.Column>
                </Grid> 
            </div>
        )
    }
}