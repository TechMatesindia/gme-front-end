import "./App.css";

import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import "./index.css";
import Register from "./components/Register";
import UD from "./components/UD";
import Dashboard from "./components/Dashboard";
import ExamInstructions from "./components/ExamInstructions";
import Exampage from "./components/Exampage"
import Result from "./components/Result";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/ud" element={<UD />} />
        <Route path="/instructions" element={<ExamInstructions />} />
        <Route path="/exam" element={<Exampage/>} />
        <Route path="/Result" element={<Result/>} />
      </Routes>
    </div>
  );
}

export default App;
