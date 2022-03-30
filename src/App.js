import React, { useState } from 'react';
import './App.css';
import ShopList from './components/ShopList';
import AddItem from './components/AddItem';
import Context from './components/context';
import {info} from './components/Store'


function App() {
  const [shopItems, setShopitems] = useState(info)
  function removeItem(id) {
    setShopitems(shopItems.filter(shopItem => shopItem.id !== id))
  }

  function addItem(name, count, width, height, weight) {
    setShopitems(shopItems.concat([{
      name,
      count,
      size: {
        width,
        height
      },
      weight,
      id: Date.now()
    }]))
  }

  return (
    <Context.Provider value={{ removeItem }}>
      <div className="App">
        <AddItem onCreate={addItem} />
        {shopItems.length ? <ShopList shopItems={shopItems} /> : <h2>No items</h2>}
      </div >
    </Context.Provider>
  );
}

export default App;
