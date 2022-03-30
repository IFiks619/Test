import React from 'react'
import ShopItem from './ShopItem'

const styles ={
    div:{
        margin: 0,
        padding: '10px',
        display:'flex',
        flexWrap:'wrap',
    }
}

export default function ShopList(props) {
    return (
        <div style={styles.div}>
            {props.shopItems.map(shopItem => {
                return <ShopItem shopItem={shopItem} key={shopItem.id} />
            })}
        </div>
    )
}
