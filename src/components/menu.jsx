import React from 'react'
import Section from './section.jsx'
import '../styling/menu.css'

export default function Menu(props) {

    const { menu, addToBag } = props

    return (
        <div className='menu-bag-container'>
            <div>
                {menu.map((menuSection) => {
                    return (
                        <Section addToBag={addToBag} sectionName={menuSection.name} menuItems={menuSection.items} />
                    )
                })}
            </div>
            <div className='bag-container'>
                <div className='bag-title'>Your order</div>
                <div>
                    <div className='bag-item-container'>
                        <div>item 1</div>
                        <div>$7.00</div>
                    </div>
                    <div className='bag-item-container'>
                        <div>item 1</div>
                        <div>$7.00</div>
                    </div>
                </div>
                <div className='divider'></div>
                <div>
                    <div className='bag-item-container'>
                        <div>Subtotal</div>
                        <div>$14.00</div>
                    </div>
                    <div className='bag-item-container'>
                        <div>Tax</div>
                        <div>$1.30</div>
                    </div>
                    <div className='divider'></div>
                    <div className='bag-item-container'>
                        <div className='total-text'>Total</div>
                        <div className='total-text'>$15.30</div>
                    </div>
                </div>
                {/* <button onClick={() => console.log('clicked')}>add</button> */}
            </div>
        </div>
    )
}