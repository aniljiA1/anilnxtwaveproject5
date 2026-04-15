import React, { useState, useEffect } from "react";
import ChatBox from "./components/ChatBox";
import MessageList from "./components/MessageList";
import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_SOCKET_URL);

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function App() {
  const [messages, setMessages] = useState([]);

  // ✅ Receive messages from server
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [data, ...prev]);
    });

    return () => {
      socket.off("receive_message"); // cleanup
    };
  }, []);

  // ✅ Send message via socket
  const sendMessage = (text) => {
    if (!text.trim()) return;

    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];

    const messageData = {
      id: Date.now(),
      user: randomUser,
      text,
      likes: 0,
    };

    socket.emit("send_message", messageData);
  };

  // ✅ Like (local only)
  const handleLike = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, likes: msg.likes + 1 } : msg,
      ),
    );
  };

  return (
    <div className="app">
      <h2>💬 React Chat App</h2>
      <MessageList messages={messages} onLike={handleLike} />
      <ChatBox onSend={sendMessage} />
    </div>
  );
}

export default App;
