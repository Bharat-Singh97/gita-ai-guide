import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Mental from "./Mental";
import Career from "./Career";
import Ethical from "./Ethical";
import Conflict from "./Conflict";
import Leadership from "./Leadership";
import Chat from "./Chat";

function App() {
  return (
    <Router>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Dashboard />} />

        {/* Chat Page */}
        <Route path="/chat" element={<Chat />} />

        {/* Modules */}
        <Route path="/mental" element={<Mental />} />
        <Route path="/career" element={<Career />} />
        <Route path="/ethical" element={<Ethical />} />
        <Route path="/conflict" element={<Conflict />} />
        <Route path="/leadership" element={<Leadership />} />

      </Routes>
    </Router>
  );
}

export default App;