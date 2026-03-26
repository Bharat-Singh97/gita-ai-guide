import React from "react";

function ChatUI({ children }) {
  return (
    <div
      style={{
        height: "100vh",
        background: "#0f172a",
        display: "flex",
        flexDirection: "column",
        color: "white"
      }}
    >
      {/* HEADER */}
      <div
        style={{
          padding: "15px",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          background: "#020617",
          borderBottom: "1px solid #333"
        }}
      >
        🧠 Gita AI Guide
      </div>

      {/* CONTENT */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px"
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default ChatUI;
