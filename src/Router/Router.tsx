import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Songs from "../pages/Songs";
import Artist from "../pages/Artist";
import Genre from "../pages/Genre";
import Dowloand from "../pages/Dowloand";
import Tos from "../pages/Tos";
import Privacy from "../pages/Privacy";
import Dmca from "../pages/Dmca";
import Error from "../pages/Error";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/find-similar-songs" element={<Songs />} />
        <Route path="/find-similar-artists" element={<Artist />} />
        <Route path="/find-similar-genres" element={<Genre />} />
        <Route path="/download-music" element={<Dowloand />} />
        <Route path="/terms-of-service" element={<Tos />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/dmca" element={<Dmca />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </div>
  )
}
