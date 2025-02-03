# 🚖 Uber Clone

A full-stack Uber Clone application built using **React.js, Node.js, Express.js, MongoDB, and Socket.io**. This project enables real-time ride booking with user authentication, location tracking, and driver-rider communication.

## 🛠 Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios  
- **Backend:** Node.js, Express.js, MongoDB, Socket.io  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Token)  
- **Real-time Communication:** WebSockets (Socket.io)  
- **Maps Integration:** Google Maps API  

## 📌 Features

✅ **User Authentication** (Signup/Login with JWT)  
✅ **Real-time Ride Requests** (Riders can request rides)  
✅ **Driver Acceptance** (Drivers can accept or reject requests)  
✅ **Live Location Tracking** (Google Maps API integration)  
✅ **Real-time Chat** (Socket.io for instant messaging)  
✅ **Ride Fare Calculation**  
✅ **Ride History** (Users and drivers can view past rides)  

---

## 🚀 Installation & Setup

### **1. Clone the Repository**
```bash
git clone https://github.com/okarin25/Uber-Clone.git
cd Uber-Clone
```

### **2. Backend Setup**
```bash
cd backend
npm install
```

#### **Create a `.env` file in the `backend` directory and add:**
```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GOOGLE_MAPS_API_KEY=your_api_key
```

#### **Run the Backend Server**
```bash
npm start
```
The backend will run on `http://localhost:4000`.

---

### **3. Frontend Setup**
```bash
cd ../frontend
npm install
```

#### **Run the Frontend**
```bash
npm run dev
```
The frontend will be available at `http://localhost:5173`.

---

## 📷 Screenshots

> Add some images or GIFs showcasing the project in action.

---

## ⚡ API Endpoints

| Method | Endpoint            | Description                      |
|--------|---------------------|----------------------------------|
| POST   | `/api/auth/signup`  | User registration               |
| POST   | `/api/auth/login`   | User login                      |
| POST   | `/api/rides/request` | Request a ride                  |
| POST   | `/api/rides/accept` | Driver accepts a ride request   |
| GET    | `/api/rides/history` | Fetch user/driver ride history  |

---

## 🌍 Environment Variables

| Variable            | Description                     |
|---------------------|---------------------------------|
| `PORT`             | Backend server port             |
| `MONGO_URI`        | MongoDB connection string       |
| `JWT_SECRET`       | JWT authentication secret       |
| `GOOGLE_MAPS_API_KEY` | API key for Google Maps services |

---

## 🤝 Contribution

Feel free to contribute to this project!  
- Fork the repository  
- Create a new branch (`feature/your-feature`)  
- Commit your changes  
- Open a pull request  

---

## 📬 Contact

👤 **Arpit Vishwakarma**  
📧 Email: arpv254@gmail.com  
🔗 [LinkedIn](your-linkedin-url) | [GitHub](https://github.com/okarin25)  
