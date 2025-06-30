const twilio = require('twilio');
const User = require('../models/User');
console.log('TWILIO_ACCOUNT_SID:', process.env.TWILIO_ACCOUNT_SID);
console.log('TWILIO_AUTH_TOKEN:', process.env.TWILIO_AUTH_TOKEN);
const twilio = require('twilio');
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const otpStore = {};

exports.sendOtp = async (req, res) => {
  const { phone } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  otpStore[phone] = otp;

  try {
    await client.messages.create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: `whatsapp:${phone}`,
      body: `Your OTP is: ${otp}`,
    });
    res.json({ success: true, message: 'OTP sent via WhatsApp' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.verifyOtp = async (req, res) => {
  const { phone, otp } = req.body;

  if (otpStore[phone] !== otp) {
    return res.status(400).json({ success: false, message: 'Invalid OTP' });
  }

  let user = await User.findOne({ phone });
  if (!user) {
    user = await User.create({ phone });
    return res.json({ success: true, message: 'Registered successfully' });
  }

  res.json({ success: true, message: 'Login successful' });
};

