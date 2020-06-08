import React from 'react'
import './card.css'

export default function Card(props) {

    const { dishName, description, price } = props

    return(
        <div className='card-container'>
            <div className='plate-name'>
                {dishName}
            </div>
            <div>
                {description}
            </div>
            <div>
                {price}
            </div>
        </div>
    )
}