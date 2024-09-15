import React, { useState } from 'react';
import { IoSendSharp } from "react-icons/io5";
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "This is a sample big message with a longer text paragraph", time: "10:20 AM", type: "received" },
    { id: 2, text: "This is a sample message for chat", time: "10:32 AM", type: "sent" },
    { id: 3, text: "This is a sample message for chat", time: "10:40 AM", type: "received" },
  ]);

  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: input,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: "sent",
      };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  return (
    <div className="chatbot-container">
      {/* Chat Header */}
      <div className="chat-header">
        <div className="user-info">
          <img src="profile.jpg" alt="John Doe" className="profile-img" />
          <div className="user-details">
            <h4 className="user-name">John Doe</h4>
            <p className="last-seen">Online</p>
          </div>
        </div>
        <div className="chat-options">
          {/* Icons for options (dots, etc.) */}
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="chat-messages">
        {messages.map(message => (
          <div key={message.id} className={`chat-bubble ${message.type}`}>
            <p>{message.text}</p>
            <span className="chat-time">{message.time}</span>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="message-input">
        <input 
          type="text" 
          placeholder="Message..." 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} 
        />
        <button onClick={handleSendMessage}>
        <IoSendSharp />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
