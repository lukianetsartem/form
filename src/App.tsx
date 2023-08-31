import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import APP_URLS from "enums/appUrls";
import useClearSessionStorageOnRefresh from "hooks/useClearSessionStorageOnRefresh";
import useNoResultRedirect from "hooks/useNoResultRedirect";
import Main from "routes/Main/Main";
import Result from "routes/Result/Result";
import "./App.css";

function App() {
  useNoResultRedirect();
  useClearSessionStorageOnRefresh();

  return (
    <div className="app">
      <Routes>
        <Route path={APP_URLS.base} element={<Main />} />
        <Route path={APP_URLS.result} element={<Result />} />
        <Route path="*" element={<Navigate to={APP_URLS.base} replace />} />
      </Routes>
    </div>
  );
}

export default App;
