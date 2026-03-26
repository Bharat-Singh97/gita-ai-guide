import React, { useState } from "react";

function Conflict() {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [verse, setVerse] = useState("");
  const [translation, setTranslation] = useState("");
  const [explanation, setExplanation] = useState("");

  const getConflictSolution = async (text = input) => {
    try {
      const res = await fetch("https://gita-backend-prqd.onrender.com/chat", {
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
      console.error(err);
      alert("Backend unreachable.");
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

      {/* Back Button */}
      <a href="/" style={{ color: "#f1c40f", fontSize: "18px", fontWeight: "bold" }}>
        ← Back
      </a>

      <h1 style={{ marginTop: "20px" }}>🤝 Conflict Resolution</h1>

      {/* 🔥 Quick Options */}
      <div style={{ marginBottom: "15px" }}>
        <p>Quick Help:</p>

        <button onClick={() => getConflictSolution("fight")} style={{ margin: "5px" }}>
          Fight with Friend
        </button>

        <button onClick={() => getConflictSolution("argument")} style={{ margin: "5px" }}>
          Argument
        </button>

        <button onClick={() => getConflictSolution("misunderstanding")} style={{ margin: "5px" }}>
          Misunderstanding
        </button>
      </div>

      <div
        style={{
          margin: "30px auto",
          padding: "30px",
          maxWidth: "700px",
          borderRadius: "15px",
          background: "rgba(255,255,255,0.1)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
          backdropFilter: "blur(6px)",
          textAlign: "left",
        }}
      >
        <textarea
          placeholder="Describe your conflict..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows="4"
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            background: "white",
            color: "black",
            fontSize: "16px",
          }}
        />

        <button
          onClick={() => getConflictSolution()}
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            borderRadius: "10px",
            background: "#f1c40f",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Get Solution
        </button>

        {(verse || explanation) && (
          <div
            style={{
              marginTop: "30px",
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

            {explanation && <p><b>Solution:</b> {explanation}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Conflict;
