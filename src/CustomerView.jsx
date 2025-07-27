// src/CustomerView.jsx
import React from 'react';
import CheckoutForm from './CheckoutForm';
import './App.css';

const CustomerView = ({ showAlert, onDismissAlert, paymentInfo, onInfoChange }) => {
  return (
    <div className="view-panel">
      <h3 style={{ marginTop: '0', color: '#003F6C' }}>Customer's View</h3>
      <CheckoutForm paymentInfo={paymentInfo} onInfoChange={onInfoChange} readOnly={false} />
      {showAlert && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, borderRadius: '12px' }}>
          <div style={{ background: 'white', padding: '24px', borderRadius: '12px', textAlign: 'center', width: '320px', boxShadow: '0 4px 12px rgba(0,0,0,0.25)' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{color: '#D91E2A', marginBottom: '10px'}}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"></path></svg>
            <h4 style={{ marginTop: '0', fontSize: '18px', color: '#D91E2A' }}>SECURITY ALERT</h4>
            <p style={{ color: '#4A4A4A', marginBottom: '24px' }}>A second active session on your account has been detected.</p>
            <button onClick={onDismissAlert} style={{ background: '#0071CE', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '24px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>Okay, Secure My Account</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CustomerView;