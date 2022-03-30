import React, {useContext} from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import Context from './context'



export default function ShopItem({ shopItem }) {
    const {removeItem} = useContext(Context)
    return (
        <Card style={{ width: '18rem', padding: '10px', border: '1px solid #333', borderRadius: '4px', margin:'10px' }} key={shopItem.id}>
            <Card.Img variant="top" width='100%' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81WywbibiU11fDdgiw5ZEqf4yCkx0-9rhj006mzgiOls7JaLGtO5gpus3-X7g3Xle8MY&usqp=CAU" />
            <Card.Body>
                <Card.Title>{shopItem.name}</Card.Title>

            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Size: {shopItem.size.width}x{shopItem.size.height}</ListGroupItem>
                <ListGroupItem>Weight: {shopItem.weight}g</ListGroupItem>
                <ListGroupItem>Count: {shopItem.count}</ListGroupItem>
            </ListGroup>
            <Card.Text>
                For comments
            </Card.Text>
            <Card.Body style={{display:'flex', justifyContent:'space-around' }}>
                <button className='add'>Add</button>
                <button onClick={()=>removeItem(shopItem.id)} className='remove '>Remove</button>
            </Card.Body>
        </Card>
    )
}