import React from "react";
import MessageItem from "./MessageItem";

function MessageList({ messages, onLike }) {
  return (
    <div className="message-list">
      {messages.map((msg) => (
        <MessageItem key={msg.id} message={msg} onLike={onLike} />
      ))}
    </div>
  );
}

export default MessageList;
