import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Movies from "./Routes/Movies";
import Recent from "./Routes/Recent";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/tv" element={<Tv />}>
          TV Shows
        </Route>
        <Route path="/movies" element={<Movies />}>
          Movies
        </Route>
        <Route path="/recent" element={<Recent />}>
          Recently Added
        </Route>
        <Route path="/search" element={<Search />}>
          Search
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieId" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
