import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity,increaseItemQuantity,decreaseItemQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  let total=0;
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  
  let totalAmount = cart.reduce((total, {cost = 0, quantity = 0}) =>
    {  
      return total + cost.replace("$","") * quantity
},0);
    
  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {

  };

  const handleContinueShopping = () => {
    onContinueShopping()
  };



  const handleIncrement = (item) => {
    
   dispatch(increaseItemQuantity(item))
    
   
  };

  const handleDecrement = (item) => {
    dispatch(decreaseItemQuantity(item))
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item))
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
  
    return total + item.cost.replace("$","") * item.quantity
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${totalAmount}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={() => handleContinueShopping()}>Continue Shopping</button>
        <br />
        <button className="get-started-button1"onClick={()=>alert("Comming Soon")}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;

