// src/CheckoutForm.jsx
import React from 'react';
import './App.css';

const CheckoutForm = ({ paymentInfo, onInfoChange, readOnly }) => {
  return (
    <div className="checkout-form">
      <h2 style={{ textAlign: 'center', color: '#333' }}>Secure Checkout</h2>
      <div className="form-group">
        <label htmlFor="cardNumber">Card Number</label>
        <input type="text" id="cardNumber" name="cardNumber" placeholder="XXXX XXXX XXXX XXXX" value={paymentInfo.cardNumber} onChange={onInfoChange} readOnly={readOnly} />
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <div className="form-group" style={{ flex: 1 }}><label htmlFor="expiryDate">Expiry Date</label><input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" value={paymentInfo.expiryDate} onChange={onInfoChange} readOnly={readOnly} /></div>
        <div className="form-group" style={{ flex: 1 }}><label htmlFor="cvv">CVV</label><input type="text" id="cvv" name="cvv" placeholder="XXX" value={paymentInfo.cvv} onChange={onInfoChange} readOnly={readOnly} /></div>
      </div>
      <button className="payment-button">Pay Now</button>
    </div>
  );
};
export default CheckoutForm;