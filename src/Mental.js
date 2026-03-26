import React, { useState } from "react";

function Mental() {
  const [input, setInput] = useState("");
  const [verse, setVerse] = useState("");
  const [sanskrit, setSanskrit] = useState("");
  const [translation, setTranslation] = useState("");
  const [explanation, setExplanation] = useState("");
  
  

  const getAdvice = async (text = input) => {
  try {
    const res = await fetch("http://127.0.0.1:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: text })
    });

    const data = await res.json();

    console.log(data);

    setVerse(data.verse);
    setSanskrit(data.sanskrit);
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

      <h1 style={{ marginTop: "20px" }}>🧠 Mental Wellness</h1>
      <p style={{ opacity: 0.8, fontSize: "14px" }}>
        Write your feelings to receive Bhagavad Gita–based emotional guidance.
      </p>

      {/* MAIN CARD */}
      <div
        style={{
          margin: "30px auto",
          padding: "30px",
          maxWidth: "650px",
          borderRadius: "15px",
          background: "rgba(255,255,255,0.08)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
          backdropFilter: "blur(6px)",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
         <p style={{ marginBottom: "10px" }}>Quick Help:</p>

          <button onClick={() => getAdvice("sad")} style={{ margin: "5px" }}>
           😞 I feel sad
         </button>

          <button onClick={() => getAdvice("anxiety")} style={{ margin: "5px" }}>
         😰 Anxiety
         </button>

       <button onClick={() => getAdvice("stress")} style={{ margin: "5px" }}>
      😴 Stress 
          </button>
        </div>
        <textarea
          placeholder="Describe how you feel..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows="5"
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            background: "rgba(255,255,255,0.9)",
            color: "black",
            fontSize: "16px",
            marginBottom: "20px",
          }}
        ></textarea>

        <button
          onClick={() => getAdvice(input)}
          style={{
            padding: "12px 25px",
            border: "none",
            borderRadius: "10px",
            background: "#f1c40f",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Get Gita Advice
        </button>

        {/* RESULTS */}
        {(verse || translation || explanation) && (
          <div
            style={{
              marginTop: "25px",
              padding: "20px",
              background: "rgba(0,0,0,0.4)",
              borderRadius: "10px",
              fontSize: "18px",
              lineHeight: "1.4",
              boxShadow: "0 3px 10px rgba(0,0,0,0.4)",
            }}
          >
            {verse && <h2 style={{ color: "#f1c40f" }}>{verse}</h2>}
            {sanskrit && (
              <p>
                <b>Sanskrit:</b> {sanskrit}
              </p>
            )}
            {translation && (
              <p>
                <b>Translation:</b> {translation}
              </p>
            )}
            {explanation && (
              <p>
                <b>Explanation:</b> {explanation}
              </p>
            )}

             
          </div>
        )}
      </div>
    </div>
  );
}

export default Mental;
