import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import './footer.css'

export default function Footer() {
    return(
        <Menu className='footer-container'>
            <Menu.Item>
                <img alt='logo' src={require('../assets/logo.png')} />
            </Menu.Item>

            <Menu.Item position='right'>
                <Icon className='social-icon' size='large' name='instagram' />
                <Icon className='social-icon' size='large' name='facebook f' />
                <Icon className='social-icon' size='large' name='twitter' />
            </Menu.Item>
        </Menu>
    )
}