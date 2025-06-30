# 🔐 WhatsApp OTP Authentication System

This is a full-stack authentication system using **WhatsApp-based OTP verification**. Users can register and log in using just their phone number. OTPs are sent via **Twilio WhatsApp API**, and user details are stored securely in **MongoDB Atlas**.

---

## 📌 Features

- ✅ Send OTP via WhatsApp using Twilio
- ✅ Verify OTP and authenticate user
- ✅ Register new users after OTP verification
- ✅ Login existing users using OTP
- ✅ React-based frontend with clean UI
- ✅ Express.js backend with MongoDB Atlas

---

## 🛠 Tech Stack

| Layer        | Technology         |
|--------------|--------------------|
| Frontend     | React.js, Axios    |
| Backend      | Node.js, Express   |
| Messaging    | Twilio WhatsApp API|
| Database     | MongoDB Atlas      |
| Dev Tools    | Git, Postman       |

---

## 📁 Project Structure

WhatsappOTPauth/
├── backend/
│ ├── controllers/ # Logic for sending & verifying OTP
│ ├── routes/ # Express routes
│ ├── models/ # Mongoose user model
│ ├── config/ # DB connection
│ └── server.js # Entry point
├── frontend/
│ ├── src/
│ │ ├── components/ # Phone login & registration UI
│ │ ├── App.js
│ │ └── index.js
├── .env.example # Sample environment variables
└── README.md

## 🧪 How It Works

1. User enters their phone number.
2. Backend sends a 6-digit OTP to the number via Twilio WhatsApp.
3. User enters OTP in the UI.
4. Backend verifies the OTP.
   - If user exists → Login.
   - If new user → Show registration form and save details.
5. Confirmation message shown to the user.

---

## 🔧 Setup Instructions (Local Only)

### 1. Clone the Repository

```bash
git clone https://github.com/Sksohel2003/WhatsappOTPauth.git
cd WhatsappOTPauth
2. Setup Backend

cd backend
npm install
Create a .env file:

env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/otp_auth
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=whatsapp:+14155238886
Then start the server:

npm start

3. Setup Frontend
cd ../frontend
npm install
Update API base URL in your frontend code to:

axios.post("http://localhost:5000/api/auth/send-otp", { phone });
Then run:
npm start


🔐 Example .env for Backend

PORT=5000
MONGO_URI=mongodb+srv://admin:yourpass@cluster.mongodb.net/otp_auth
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxx
TWILIO_PHONE_NUMBER=whatsapp:+14155238886
🚀 Future Deployment
Vercel for frontend

Render for backend

Custom domain support

📦 To Do / Improvements
Use JWT token authentication

Add loading states and error handling

Add toast notifications for success/error

Enable SMS or Telegram fallback

Add login attempt limits

👤 Author
Name: Sohel
GitHub: @Sksohel2003
Year: 2025

⭐️ Support
If you like this project, give it a ⭐ on GitHub!

yaml
Copy
Edit

---

Let me know if you'd like this in a **downloadable PDF**, or if you want to include:
- Your own name/logo/screenshot
- Screens for mobile version
- Custom styling

Ready to help you finish it strong! ✅
