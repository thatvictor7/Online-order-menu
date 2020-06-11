import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import '../styling/itemSelector.css'

export default function itemSelector(props) {

    const { itemCard, foodItem, addToBag } = props

    return (
        <Modal trigger={<Button className='button-card-container'>{itemCard}</Button>} closeIcon>
            <Header  content={foodItem.dishName} />
            {console.log(foodItem)}
            <Modal.Content>
                <div>{foodItem.description}</div>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => addToBag(foodItem)} color='green'>
                    Order ${foodItem.price}
                </Button>
            </Modal.Actions>
        </Modal>
    )
}