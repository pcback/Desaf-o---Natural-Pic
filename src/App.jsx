import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";
import CounterProvider from "./components/context/CounterContext";
import { useContext } from "react";

const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <div>
      <CounterProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </CounterProvider>
    </div>
  );
};
export default App;
