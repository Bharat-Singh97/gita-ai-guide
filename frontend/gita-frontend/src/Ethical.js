import React, { useState } from "react";

function Ethical() {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [verse, setVerse] = useState("");
  const [translation, setTranslation] = useState("");
  const [explanation, setExplanation] = useState("");

  const getEthical = async (text = input) => {
    try {
      // ✅ clear old data
      setTitle("");
      setVerse("");
      setTranslation("");
      setExplanation("");

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
      <a
        href="/"
        style={{
          color: "#f1c40f",
          fontSize: "18px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        ← Back
      </a>

      <h1 style={{ marginTop: "20px" }}>⚖️ Ethical Advisor</h1>
      <p style={{ opacity: 0.8, fontSize: "14px" }}>
        Describe your moral conflict (e.g., “Should I tell the truth?”)
      </p>

      {/* 🔥 Quick Options */}
      <div style={{ marginBottom: "15px" }}>
        <p>Quick Help:</p>

        <button onClick={() => getEthical("truth")} style={{ margin: "5px" }}>
          Truth vs Lie
        </button>

        <button onClick={() => getEthical("honesty")} style={{ margin: "5px" }}>
          Honesty
        </button>

        <button onClick={() => getEthical("wrong")} style={{ margin: "5px" }}>
          Right vs Wrong
        </button>
      </div>

      {/* Glass Box */}
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
          placeholder="Describe your ethical dilemma..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows="4"
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            background: "white",
            color: "black",
            border: "none",
            outline: "none",
            fontSize: "16px",
          }}
        ></textarea>

        <button
          onClick={() => getEthical(input)}  // ✅ FIXED
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            border: "none",
            borderRadius: "10px",
            background: "#f1c40f",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Get Ethical Advice
        </button>

        {/* RESULTS */}
        {(title || verse || explanation) && (
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              background: "rgba(0,0,0,0.4)",
              borderRadius: "10px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.4)",
            }}
          >

            {/* Title */}
            {title && (
              <h2 style={{ color: "#f1c40f" }}>
                {title}
              </h2>
            )}

            {/* Verse */}
            {verse && (
              <p><b>Verse:</b> {verse}</p>
            )}

            {/* Meaning */}
            {translation && (
              <p><b>Meaning:</b> {translation}</p>
            )}

            {/* Explanation */}
            {explanation && (
              <p><b>Explanation:</b> {explanation}</p>
            )}

          </div>
        )}
      </div>
    </div>
  );
}

export default Ethical;
