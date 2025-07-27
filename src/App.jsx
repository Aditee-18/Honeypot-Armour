// src/App.jsx

import React, { useState } from 'react';
import CustomerView from './CustomerView';
import HackerView from './HackerView';
import ThreatDashboard from './ThreatDashboard';
import './App.css';

function App() {
  const [userPaymentInfo, setUserPaymentInfo] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
  const [hackerPaymentInfo, setHackerPaymentInfo] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
  const [isAttackTriggered, setIsAttackTriggered] = useState(false);
  const [isHackerSandboxed, setIsHackerSandboxed] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setUserPaymentInfo(prevInfo => ({ ...prevInfo, [name]: value }));
    if (!isHackerSandboxed) {
      setHackerPaymentInfo(prevInfo => ({ ...prevInfo, [name]: value }));
    }
  };

  const handleSimulateAttack = () => {
    if (isAttackTriggered) return;
    setIsAttackTriggered(true);
    setTimeout(() => setShowAlert(true), 1000);
    setTimeout(() => setIsHackerSandboxed(true), 1500);
  };
  
  const handleDismissAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="app-container">
      <header className="header">
        {/* 
          --- THE FIX IS HERE ---
          I have replaced the old, broken link with a new, guaranteed working URL for your logo.
        */}
        <img 
          src="/mylogo.png" // This is the new, working URL.
          alt="Retail Armor Logo" 
          style={{
            height: '80px',
            width: '80px',
            borderRadius: '50%',
            boxShadow: '0 6px 10px rgba(0,0,0,0.7)',
            border: '2px solid white'
          }} 
        />
        
        <p style={{ margin: '16px 0 0 0', fontWeight: 'bold', fontSize: '24px' }}>Honeypot Armour</p>
        <p style={{ margin: '8px 0 0 0', fontSize: '20px',color: '#4A4A4A' }}>A Next-Generation Cybersecurity Shield</p>
        
        {!isAttackTriggered && (
          <div style={{ marginTop: '20px' }}>
            <button 
              onClick={handleSimulateAttack}
              style={{
                background: '#FFC220', color: 'black', border: 'none',
                padding: '15px 30px', borderRadius: '30px', fontWeight: 'bold',
                cursor: 'pointer', fontSize: '18px', boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                transition: 'transform 0.2s ease'
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Simulate Honeypot Armour Defense
            </button>
          </div>
        )}
      </header>

      <main className="main-content">
        <CustomerView
          showAlert={showAlert}
          onDismissAlert={handleDismissAlert}
          paymentInfo={userPaymentInfo}
          onInfoChange={handleInfoChange}
        />
        <HackerView
          paymentInfo={hackerPaymentInfo}
          isSandboxed={isHackerSandboxed}
        />
      </main>
      
      {isAttackTriggered && <ThreatDashboard />}
    </div>
  );
}

export default App;