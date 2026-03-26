import React, { useState } from "react";

function Career() {
  const [title, setTitle] = useState("");
  const [input, setInput] = useState("");
  const [verse, setVerse] = useState("");
  const [explanation, setExplanation] = useState("");
  const [skills, setSkills] = useState([]);
  const [courses, setCourses] = useState([]);
  const [duration, setDuration] = useState("");
  const [roadmap, setRoadmap] = useState("");

  const getCareer = async (text = input) => {
  try {
    const res = await fetch("https://gita-backend-prqd.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: text })
    });

    const data = await res.json();

    console.log(data);

    setTitle(data.title);
    setVerse(data.gita?.verse);
    setExplanation(data.gita?.message);
    setSkills(data.skills || []);
    setCourses(data.courses || []);
    setDuration(data.duration);
    setRoadmap(data.roadmap);

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

      <h1 style={{ marginTop: "20px" }}>💼 Career Guidance</h1>
      <p style={{ opacity: 0.8, fontSize: "14px" }}>
        Describe your interest (Example: "I want to become a software engineer")
      </p>

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
        <div style={{ marginBottom: "15px" }}>
  <p style={{ marginBottom: "10px" }}>Quick Career Options:</p>

  <button onClick={() => getCareer("python")} style={{ margin: "5px" }}>
    💻 Python Developer
  </button>

  <button onClick={() => getCareer("web developer")} style={{ margin: "5px" }}>
    🌐 Web Developer
  </button>

  <button onClick={() => getCareer("app developer")} style={{ margin: "5px" }}>
    📱 App Developer
  </button>
</div>
        <textarea
          placeholder="Enter your career interest..."
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
         onClick={() => getCareer(input)}
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
          Get Career Suggestion
        </button>

        {(roadmap || skills.length > 0) && (
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              background: "rgba(0,0,0,0.4)",
              borderRadius: "10px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.4)",
            }}
          >
          {/* ✅ Title */}
           {title && (
             <h2 style={{ color: "#f1c40f", marginBottom: "10px" }}>
           {title}
           </h2>
           )}
            {/* Verse */}
            {verse && (
              <h2 style={{ color: "#f1c40f", marginBottom: "10px" }}>
                {verse}
              </h2>
            )}

            {explanation && (
              <p>
                <b>Explanation:</b> {explanation}
              </p>
            )}

            {/* Career Details */}
            {skills.length > 0 && (
              <>
                <h3 style={{ marginTop: "20px", color: "#f1c40f" }}>Required Skills</h3>
                <ul>
                  {skills.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </>
            )}

            {courses.length > 0 && (
              <>
                <h3 style={{ color: "#f1c40f" }}>Suggested Courses</h3>
                <ul>
                  {courses.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </>
            )}

            {duration && (
              <>
                <h3 style={{ color: "#f1c40f" }}>Duration</h3>
                <p>{duration}</p>
              </>
            )}

            {roadmap && (
              <>
                <h3 style={{ color: "#f1c40f" }}>Roadmap</h3>
                <p>{roadmap}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Career;
