from dotenv import load_dotenv
import os
import json
from difflib import get_close_matches
from flask import Flask, jsonify, request
from flask_cors import CORS

# 🔥 Load env
load_dotenv()

# 🔥 Load modules.json
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

with open(os.path.join(BASE_DIR, "data/modules.json"), "r", encoding="utf-8") as f:
    MODULES = json.load(f)

# 🔍 Smart matching
def is_similar(word, keywords):
    return get_close_matches(word, keywords, cutoff=0.7)

# 🤖 AI fallback
def ask_ai(msg):
    words = msg.split()

    career_keywords = ["career", "job", "developer", "engineer", "coding"]
    mental_keywords = ["sad", "depressed", "lonely", "pain"]

    for word in words:
        if is_similar(word, career_keywords):
            return "Start taking action daily. Build skills step by step 🚀"

        if is_similar(word, mental_keywords):
            return "This phase will pass. Stay strong 🙏"

    return "I understand your situation. Stay calm and take one step forward at a time 🙏"

# 🚀 Flask setup
app = Flask(__name__)
CORS(app)

# 🔥 MAIN CHAT API
@app.post("/chat")
def chat():
    data = request.get_json(force=True)
    msg = data.get("query", "").lower().strip()

    # 🔥 software shortcut
    if "software" in msg:
        return jsonify({
            "type": "career",
            "title": "Software Developer 💻",
            "roadmap": "Programming → DSA → Projects → Specialization",
            "skills": ["Programming", "DSA", "Problem Solving"],
            "youtube": [
                "https://www.youtube.com/watch?v=8hly31xKli0"
            ],
            "websites": [
                "https://roadmap.sh/software-engineer"
            ],
            "gita": {
                "verse": "BG 2.47",
                "message": "Keep working consistently without attachment to results."
            }
        })

    # ✅ split once
    words = msg.split()

    # ✅ SMART MATCHING
    best_match = None
    best_score = 0

    for entry in MODULES:
        score = 0

        for k in entry["keywords"]:
            if k in msg:
                score += 2
            elif any(k in word for word in words):
                score += 1

        if score > best_score:
            best_score = score
            best_match = entry

    # ✅ RESPONSE
    if best_match:
        entry = best_match

        if entry["module"] == "mental":
            return jsonify({
                "type": "gita",
                "verse": entry.get("verse"),
                "sanskrit": entry.get("sanskrit"),
                "translation": entry.get("translation"),
                "explanation": entry.get("explanation"),
                "youtube": entry.get("youtube", []),
                "websites": entry.get("websites", [])
            })

        elif entry["module"] == "career":
            return jsonify({
                "type": "career",
                "title": entry["title"],
                "roadmap": entry["roadmap"],
                "skills": entry["skills"],
                "youtube": entry["youtube"],
                "websites": entry["websites"],
                "gita": entry.get("gita", {})
            })

        else:
            return jsonify({
                "type": "life",
                "title": entry["title"],
                "verse": entry.get("gita", {}).get("verse"),
                "translation": entry.get("translation"),
                "explanation": entry.get("explanation"),
                "youtube": entry.get("youtube", []),
                "websites": entry.get("websites", [])
            })

    # 🤖 fallback
    return jsonify({
        "type": "default",
        "response": ask_ai(msg)
    })
# ▶️ Run app
if __name__ == "__main__":
   app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
