import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Dashboard() {
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  const modules = [
    {
      name: "Mental Wellness",
      icon: "🧠",
      path: "/mental",
      desc: "Bhagavad Gita based emotional guidance (stress, sadness, fear)."
    },
    {
      name: "Career Guidance",
      icon: "💼",
      path: "/career",
      desc: "Find suitable career paths using Gita wisdom + modern roadmap."
    },
    {
      name: "Ethical Advisor",
      icon: "⚖️",
      path: "/ethical",
      desc: "Right vs wrong decisions using dharma-based logic."
    },
    {
      name: "Conflict Resolution",
      icon: "🤝",
      path: "/conflict",
      desc: "Handle fights, misunderstandings, anger & ego issues."
    },
    {
      name: "Leadership Training",
      icon: "👑",
      path: "/leadership",
      desc: "Develop leadership, discipline & responsibility."
    }
  ];

  const isDark = darkMode;

  const pageStyle = {
    minHeight: "100vh",
    padding: 0,
    margin: 0,
    backgroundImage: isDark ? "url('/krishna_bg.jpg')" : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundColor: isDark ? "#050814" : "linear-gradient(135deg, #f4e8c1, #f0e4b3)",
    color: isDark ? "white" : "#222",
    fontFamily: "Poppins, sans-serif",
  };

  const navStyle = {
    width: "100%",
    padding: "12px 20px",
    background: isDark ? "rgba(0,0,0,0.65)" : "rgba(255,255,255,0.85)",
    color: isDark ? "white" : "#222",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(7px)",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  };

  const toggleButtonStyle = {
    padding: "8px 16px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    background: isDark ? "#f1c40f" : "#2c3e50",
    color: isDark ? "#222" : "#f8f8f8",
    boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
  };

  return (
    <div style={pageStyle}>
      {/* NAVBAR */}
      <div style={navStyle}>
        <div style={{ fontSize: "22px", fontWeight: "bold" }}>
          🕉️ GITA GUIDE &nbsp;
          <span style={{ fontSize: "14px", opacity: 0.8 }}>
            AI-based Youth Guidance
          </span>
        </div>
        <button
          style={toggleButtonStyle}
          onClick={() => setDarkMode(!darkMode)}
        >
          {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>


<button
  onClick={() => navigate("/chat")}
  style={{
    padding: "12px 25px",
    borderRadius: "25px",
    border: "none",
    background: "#f1c40f",
    color: "#222",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
  }}
>
  🚀 Start AI Guidance
</button>

      {/* MAIN CONTENT */}
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "38px",
            marginTop: "10px",
            textShadow: isDark ? "0 3px 10px rgba(0,0,0,0.8)" : "none",
          }}
        >
          Bhagavad Gita Powered Youth Assistant ✨
        </h1>

        {/* Krishna Shloka */}
        <div
          style={{
            maxWidth: "800px",
            margin: "20px auto 35px auto",
            padding: "15px 20px",
            borderRadius: "12px",
            background: isDark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.9)",
            color: isDark ? "#fdfdfd" : "#333",
            boxShadow: isDark
              ? "0 4px 12px rgba(0,0,0,0.7)"
              : "0 3px 10px rgba(0,0,0,0.15)",
            backdropFilter: "blur(6px)",
          }}
        >
          <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "6px" }}>
            📜 Bhagavad Gita 2.47
          </div>
          <div style={{ fontStyle: "italic", marginBottom: "6px" }}>
            “karmaṇy-evādhikāras te mā phaleṣu kadācana”
          </div>
          <div style={{ fontSize: "14px" }}>
            You have a right to perform your duty, but not to control the results.
            <br />
            <span style={{ fontSize: "13px", opacity: 0.9 }}>
              — Core principle behind this project: focus on right action, not fear.
            </span>
          </div>
        </div>

        {/* MODULE CARDS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "25px",
            paddingBottom: "40px",
          }}
        >
          {modules.map((mod, index) => (
            <Link
              key={index}
              to={mod.path}
              style={{ textDecoration: "none", color: isDark ? "white" : "#222" }}
            >
              <div
                style={{
                  width: "270px",
                  padding: "25px",
                  borderRadius: "15px",
                  background: isDark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.95)",
                  boxShadow: isDark
                    ? "0 6px 20px rgba(0,0,0,0.7)"
                    : "0 4px 15px rgba(0,0,0,0.2)",
                  transition: "0.3s",
                  backdropFilter: "blur(6px)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
                  e.currentTarget.style.boxShadow = isDark
                    ? "0 10px 30px rgba(255,255,255,0.3)"
                    : "0 8px 20px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = isDark
                    ? "0 6px 20px rgba(0,0,0,0.7)"
                    : "0 4px 15px rgba(0,0,0,0.2)";
                }}
              >
                <div style={{ fontSize: "44px", marginBottom: "8px" }}>
                  {mod.icon}
                </div>

                <h2
                  style={{
                    fontSize: "20px",
                    marginBottom: "8px",
                    textShadow: isDark ? "0 2px 5px rgba(0,0,0,0.8)" : "none",
                  }}
                >
                  {mod.name}
                </h2>

                <p
                  style={{
                    fontSize: "13px",
                    color: isDark ? "#f0f0f0" : "#555",
                    lineHeight: "1.4",
                    marginTop: "5px",
                  }}
                >
                  {mod.desc}
                </p>

                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    opacity: 0.9,
                  }}
                >
                  Tap to explore →
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* FOOTER */}
        <div
          style={{
            padding: "12px 10px 18px 10px",
            fontSize: "13px",
            color: isDark ? "#f0f0f0" : "#333",
            background: isDark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.8)",
            borderTop: isDark
              ? "1px solid rgba(255,255,255,0.2)"
              : "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 -2px 8px rgba(0,0,0,0.3)",
          }}
        >
          Final Year B.Tech (CSE) Project — Gita Guide | Inspired by Bhagavad Gita teachings |
          Designed by Team: Bharat & Friends 🙏
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
