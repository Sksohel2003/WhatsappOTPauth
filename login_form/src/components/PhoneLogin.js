import React, { useState } from 'react';
import axios from 'axios';

export default function PhoneLogin() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const sendOtp = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/send-otp', { phone });
      alert('OTP sent to your WhatsApp');
      setStep(2);
    } catch (err) {
      alert('Failed to send OTP: ' + err.response?.data?.error);
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/verify-otp', { phone, otp });
      alert(res.data.message);
      setStep(1);
      setPhone('');
      setOtp('');
    } catch (err) {
      alert('Verification failed: ' + err.response?.data?.message);
    }
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '80px auto',
      padding: '30px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: '12px',
      textAlign: 'center',
      backgroundColor: '#fff',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      marginBottom: '20px',
      fontSize: '24px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      fontSize: '16px',
      borderRadius: '6px',
      border: '1px solid #ccc',
    },
    button: {
      width: '100%',
      padding: '12px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>WhatsApp OTP Login</h2>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter phone (e.g. +91XXXXXXXXXX)"
        style={styles.input}
      />
      {step === 1 ? (
        <button onClick={sendOtp} style={styles.button}>Send OTP</button>
      ) : (
        <>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            style={styles.input}
          />
          <button onClick={verifyOtp} style={styles.button}>Verify OTP</button>
        </>
      )}
    </div>
  );
}
