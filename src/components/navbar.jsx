import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'
import './navbar.css'

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    // const { activeItem } = this.state

    return (
      <Menu  className='navbar-container'>
        <Menu.Item className='sd-logo'>
                <img alt='logo' src={require('../assets/logo.png')} />
                {/* <div className='logo-text'>
                </div> */}
                <div>
                    {this.props.name}
                </div>
        </Menu.Item>

        <Menu.Item position='right'>
          <Input placeholder='Search...' />
        </Menu.Item>
      </Menu>
    )
  }
}

// import React, { Component } from 'react'
// import { Menu, Input } from 'semantic-ui-react'
// import './navbar.css'

// export default function Navbar() {

// }