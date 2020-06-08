import React from 'react'
import './section.css'
import Card from './card.jsx'

export default function Section(props) {

    const { sectionName, menuItems } = props

    return (
        <div className='section-container'>
            <div className='section-title'>
                {sectionName}
            </div>
            {menuItems.map((item) => {
                return (
                    <Card dishName={item.dishName} description={item.description} price={item.price} />
                )
            })}
        </div>
    )
}