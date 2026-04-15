# 💬 React Chat App (Socket.io)

A real-time chat application built using **React (Vite)** and **Socket.io**. Users can send messages, get random usernames, and like messages.

---

## Live Demo
Link: https://anilnxtwaveproject5.vercel.app

---


## 🚀 Features

* 💬 Send and receive messages in real-time
* 👤 Random username assignment
* 👍 Like button with count
* ⚡ Fast frontend using Vite
* 🔌 WebSocket communication using Socket.io
* 🔐 Environment variable support (.env)

---

## 🧱 Project Structure

```
react-chat-app/
│
├── client/          # React (Vite)
│   ├── src/
│   ├── .env
│
├── server/          # Express + Socket.io
│   ├── server.js
│   ├── .env
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/aniljiA1/anilnxtwaveproject5.git
cd react-chat-app
```

---

## 🖥️ Frontend Setup (Client)

```
cd client
npm install
npm install socket.io-client
```

### ▶️ Run Frontend

```
npm run dev
```

Frontend runs on:
👉 http://localhost:5173

---

## 🧠 Backend Setup (Server)

```
cd server
npm install
npm install express socket.io cors dotenv
```

### ▶️ Run Backend

```
node server.js
```

Backend runs on:
👉 http://localhost:5000

---

## 🔐 Environment Variables

### 📌 client/.env

```
VITE_SOCKET_URL=http://localhost:5000
```

---

### 📌 server/.env

```
PORT=5000
CLIENT_URL=http://localhost:5173
```

---

## 🔄 How It Works

* Client sends message → `socket.emit("send_message")`
* Server receives → broadcasts using `io.emit`
* All clients receive → update UI instantly

---

## 🧪 Testing

1. Open app in **2 browser tabs**
2. Send message in one tab
3. Message appears instantly in both tabs ✅

---

## 🛠️ Tech Stack

* React (Vite)
* Socket.io
* Node.js
* Express
* CSS

---

## 🌟 Future Improvements

* 🟢 Typing indicator
* 🕒 Timestamps
* 🗂️ Chat rooms
* 🔐 Authentication
* 💾 Database (MongoDB)

---


## 👨‍💻 Author

**Anil Kumar**

---

