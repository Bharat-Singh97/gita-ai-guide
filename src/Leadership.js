import React, { useState } from "react";

function Leadership() {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [verse, setVerse] = useState("");
  const [translation, setTranslation] = useState("");
  const [explanation, setExplanation] = useState("");

  const getLeadership = async (text = input) => {
    try {
      const res = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: text })
      });

      const data = await res.json();

      console.log(data);

      setTitle(data.title);
      setVerse(data.verse);
      setTranslation(data.translation);
      setExplanation(data.explanation);

    } catch (err) {
      alert("Backend not reachable.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "rgba(0,0,0,0.85)",
        color: "white",
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
      }}
    >

      {/* Back */}
      <a href="/" style={{ color: "#f1c40f", fontWeight: "bold" }}>
        ← Back
      </a>

      <h1 style={{ marginTop: "20px" }}>👑 Leadership Guidance</h1>

      {/* 🔥 Quick Buttons */}
      <div style={{ marginBottom: "15px" }}>
        <p>Quick Help:</p>

        <button onClick={() => getLeadership("leader")} style={{ margin: "5px" }}>
          Leadership Skills
        </button>

        <button onClick={() => getLeadership("decision")} style={{ margin: "5px" }}>
          Decision Making
        </button>

        <button onClick={() => getLeadership("responsibility")} style={{ margin: "5px" }}>
          Responsibility
        </button>
      </div>

      {/* Card */}
      <div
        style={{
          margin: "30px auto",
          padding: "30px",
          maxWidth: "700px",
          borderRadius: "15px",
          background: "rgba(255,255,255,0.1)",
        }}
      >
        <textarea
          rows="4"
          placeholder="Write your leadership question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            background: "white",
            color: "black",
          }}
        />

        <button
          onClick={() => getLeadership()}
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            borderRadius: "10px",
            background: "#f1c40f",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Get Leadership Advice
        </button>

        {(verse || explanation) && (
          <div
            style={{
              marginTop: "25px",
              padding: "20px",
              background: "rgba(0,0,0,0.4)",
              borderRadius: "10px",
            }}
          >
            {/* ✅ Title */}
            {title && <h2 style={{ color: "#f1c40f" }}>{title}</h2>}

            {/* Verse */}
            {verse && <p><b>Verse:</b> {verse}</p>}

            {translation && <p><b>Meaning:</b> {translation}</p>}

            {explanation && <p><b>Explanation:</b> {explanation}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Leadership;