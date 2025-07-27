// src/ThreatDashboard.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

// This is a custom "hook" that encapsulates the typewriter logic.
const useTypewriter = (text, speed = 50, startDelay = 0) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, speed);
      return () => clearInterval(typingInterval);
    }, startDelay);
    
    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay]);

  return displayText;
};


const ThreatDashboard = () => {
  // We use the hook for each line, with a delay to make them appear sequentially.
  const statusText = useTypewriter('LIVE THREAT', 50, 0);
  const threatIdText = useTypewriter('SATELLITE_SESSION_DETECTED', 50, 800);
  const actionText = useTypewriter('User Notified. Attacker Sandboxed.', 50, 2800);
  const honeypotText = useTypewriter('ACTIVE - LOGGING TTPs...', 50, 5000);

  return (
    <div className="threat-dashboard-container">
      <div className="threat-dashboard">
        <h2>[ HONEYPOT ARMOUR: THREAT INTELLIGENCE ]</h2>
        <div>
          <div className="dashboard-line">
            <span className="line-label"> STATUS:</span>
            <span style={{ color: '#f85149', fontWeight: 'bold' }}>{statusText}</span>
          </div>
          <div className="dashboard-line">
            <span className="line-label"> THREAT_ID:</span>
            <span>{threatIdText}</span>
          </div>
          <div className="dashboard-line">
            <span className="line-label"> RESPONSE_ACTION:</span>
            <span>{actionText}</span>
          </div>
          <div className="dashboard-line">
            <span className="line-label"> HONEYPOT_STATUS:</span>
            {honeypotText && ( /* Show the dot only when the text starts typing */
              <span>
                <span className="pulse-green"></span>
                {honeypotText}
                <span className="blinking-cursor">|</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreatDashboard;