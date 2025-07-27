// src/HackerView.jsx
import React from 'react';
import CheckoutForm from './CheckoutForm';
import './App.css';

const HackerView = ({ paymentInfo, isSandboxed }) => {
  return (
    <div className="view-panel" style={{ background: '#FFF5F5' }}>
      <h3 style={{ marginTop: '0', color: '#D91E2A' }}>Hacker's View (Mirroring Session)</h3>
      <div style={{ filter: isSandboxed ? 'blur(5px)' : 'none', transition: 'filter 0.3s ease' }}>
        <CheckoutForm paymentInfo={paymentInfo} readOnly={true} />
      </div>
      {isSandboxed && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(255, 235, 238, 0.9)', color: '#C62828', padding: '20px', borderRadius: '8px', border: '1px solid #D91E2A', fontWeight: 'bold', textAlign: 'center', zIndex: 5 }}>
          SESSION SANDBOXED<br/>
          <span style={{ fontWeight: 'normal', fontSize: '14px' }}>Attacker has been isolated.</span>
        </div>
      )}
    </div>
  );
};
export default HackerView;