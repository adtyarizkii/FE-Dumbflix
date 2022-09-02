import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TvseriesPage from "./pages/TvseriesPage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tvshows" element={<TvseriesPage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
}

export default App;
