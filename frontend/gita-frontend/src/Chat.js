import React, { useState } from "react";
import ChatUI from "./components/ChatUI";

function Chat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message) return;

    const res = await fetch("http://127.0.0.1:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: message }),
    });

    const data = await res.json();

    setChat([
      ...chat,
      { user: message, bot: data } // ✅ पूरा data store करो
    ]);

    setMessage("");
  };

  return (
   <ChatUI>
      <h2 style={{ 
  color: "#f1c40f", 
  textAlign: "center", 
  marginBottom: "20px" 
}}>
  Gita AI Guide 🧠
</h2>

      <div>
     {chat.map((c, i) => (
  <div key={i} style={{ marginBottom: "15px" }}>

    {/* USER MESSAGE */}
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <div
        style={{
          background: "#f1c40f",
          color: "black",
          padding: "10px 15px",
          borderRadius: "15px",
          maxWidth: "60%"
        }}
      >
        {c.user}
      </div>
    </div>

    {/* BOT MESSAGE */}
    <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "5px" }}>
      <div
        style={{
          background: "#1e293b",
          color: "white",
          padding: "10px 15px",
          borderRadius: "15px",
          maxWidth: "70%"
        }}
      >

        {/* 🧘 GITA */}
       {c.bot.type === "gita" && (
  <>
    <h3>{c.bot.verse}</h3>
    <p><b>Sanskrit:</b> {c.bot.sanskrit}</p>
    <p><b>Translation:</b> {c.bot.translation}</p>
    <p><b>Explanation:</b> {c.bot.explanation}</p>

    {/* 🎥 YouTube */}
    {c.bot.youtube?.length > 0 && (
      <>
        <p><b>YouTube:</b></p>
        {c.bot.youtube.map((link, i) => (
          <a key={i} href={link} target="_blank" rel="noreferrer" style={{ color: "#4fc3f7", display: "block" }}>
            ▶ Watch Video
          </a>
        ))}
      </>
    )}

    {/* 🌐 Websites */}
    {c.bot.websites?.length > 0 && (
      <>
        <p><b>Websites:</b></p>
        {c.bot.websites.map((link, i) => (
          <a key={i} href={link} target="_blank" rel="noreferrer" style={{ color: "#4fc3f7", display: "block" }}>
            🔗 {link}
          </a>
        ))}
      </>
    )}
  </>
)}{c.bot.type === "career" && (
  <>
    <h3>{c.bot.title}</h3>
    <p><b>Roadmap:</b> {c.bot.roadmap}</p>
    <p><b>Skills:</b> {c.bot.skills?.join(", ")}</p>

    {/* 🎥 YouTube */}
    {c.bot.youtube?.map((link, i) => (
      <a key={i} href={link} target="_blank" rel="noreferrer" style={{ color: "#4fc3f7", display: "block" }}>
        ▶ Watch Video
      </a>
    ))}

    <p><b>Gita:</b> {c.bot.gita?.message}</p>
    <p><b>Verse:</b> {c.bot.gita?.verse}</p>

    {/* 🌐 Websites */}
    {c.bot.websites?.map((link, i) => (
      <a key={i} href={link} target="_blank" rel="noreferrer" style={{ color: "#4fc3f7", display: "block" }}>
        🔗 {link}
      </a>
    ))}
  </>
)}

       {c.bot.type === "life" && (
  <>
    <h3>{c.bot.title}</h3>
    <p><b>Verse:</b> {c.bot.verse}</p>
    <p><b>Meaning:</b> {c.bot.translation}</p>
    <p><b>Explanation:</b> {c.bot.explanation}</p>

    {/* 🎥 YouTube */}
    {c.bot.youtube?.map((link, i) => (
      <a key={i} href={link} target="_blank" rel="noreferrer" style={{ color: "#4fc3f7", display: "block" }}>
        ▶ Watch Video
      </a>
    ))}

    {/* 🌐 Websites */}
    {c.bot.websites?.map((link, i) => (
      <a key={i} href={link} target="_blank" rel="noreferrer" style={{ color: "#4fc3f7", display: "block" }}>
        🔗 Read Shloka
      </a>
    ))}
  </>
)}

        {/* 🤖 DEFAULT */}
        {c.bot.type === "default" && (
          <p>{c.bot.response}</p>
        )}

      </div>
    </div>

  </div>
))}
      </div>
<div style={{
  display: "flex",
  padding: "10px",
  background: "#020617"
}}>
  <input
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    placeholder="Ask your problem..."
    style={{
      flex: 1,
      padding: "10px",
      borderRadius: "8px",
      border: "none",
      outline: "none"
    }}
  />

  <button
    onClick={sendMessage}
    style={{
      marginLeft: "10px",
      padding: "10px 20px",
      borderRadius: "8px",
      border: "none",
      background: "#f1c40f",
      cursor: "pointer"
    }}
  >
    Send
  </button>
</div>
    </ChatUI>
  );
}

export default Chat;
