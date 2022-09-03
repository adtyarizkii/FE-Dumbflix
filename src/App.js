import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TvseriesPage from "./pages/TvseriesPage";
import MoviesPage from "./pages/MoviesPage";
import NotFound from "./components/NotFound";
import NavbarUser from "./components/NavbarUser";
import Profile from "./pages/Profile";
import Upgrade from "./pages/Upgrade";

function App() {
  return (
    <div>
      <NavbarUser />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tvshows" element={<TvseriesPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/pay" element={<Upgrade />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
