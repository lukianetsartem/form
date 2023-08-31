import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { exercisesStorageKey } from "enums/storageKeys";
import Storage from "utils/storage";
import Main from "routes/Main/Main";
import Result from "routes/Result/Result";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const exercises = Storage.get(exercisesStorageKey);

  useEffect(() => {
    if (!exercises) navigate("/");
  }, [exercises, navigate]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
