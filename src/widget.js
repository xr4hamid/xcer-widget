import "./widget.css";
// src/App.js
import React, { useState } from "react";
import Chatbox from "./chatbox";
import { FiX } from "react-icons/fi";
import "./widget.css"; // 👈 import the new styles
const queryParams = new URLSearchParams(window.location.search);
// const autoStart = queryParams.get("autostart") === "true";



function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const autoStart = queryParams.get("autostart") === "true";

  // ✅ Apply it to default state
  const [isOpen, setIsOpen] = useState(autoStart);

  return (
    <div>

{!autoStart && (
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="chat-toggle-button"
  >
    <div className="chat-toggle-wrapper">
      {isOpen ? (
        <div className="chat-close-icon">
          <FiX />
        </div>
      ) : (
        <div className="chat-toggle-icon-wrapper">
  <img
    src="/ai-bubble.gif"
    alt="Chat with Assistant"
    className={`chat-toggle-icon ${isOpen ? "rotated" : ""}`}
  />
  <span className="chat-icon-label">XCER AI</span>
</div>

      )}
    </div>
  </button>
)}



      {/* Chat Widget Panel */}
      {isOpen && (
        <div className="chatbox-container">
          <Chatbox />
        </div>
      )}
    </div>
  );
}

export default App;
