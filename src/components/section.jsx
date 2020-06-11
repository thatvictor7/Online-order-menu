import React from 'react'
import '../styling/section.css'
import Card from './card.jsx'
import ItemSelector from './itemSelector.jsx'

export default function Section(props) {

    const { sectionName, menuItems, addToBag } = props

    return (
        <div className='section-container'>
            <div className='section-title'>
                {sectionName}
            </div>
            {menuItems.map((item) => {
                return (
                    <ItemSelector addToBag={addToBag} foodItem={item} itemCard={<Card dishName={item.dishName} description={item.description} price={item.price} />} />
                )
            })}
        </div>
    )
}