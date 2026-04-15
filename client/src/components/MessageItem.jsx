import React from "react";

function MessageItem({ message, onLike }) {
  return (
    <div className="message-item">
      <strong>{message.user}: </strong>
      <span>{message.text}</span>

      <div className="like-section">
        <button onClick={() => onLike(message.id)}>👍</button>
        <span>{message.likes}</span>
      </div>
    </div>
  );
}

export default MessageItem;
