import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/find-similar-songs">/findSimilarSongs</Link>
            <Link to="/find-similar-artist">/findSimilarArtist</Link>
            <Link to="/find-similar-genres">/findSimilarGenres</Link>
            <Link to="/download-music">/downloadMusic</Link>
            <Link to="/terms-of-service">/termsOfService</Link>
            <Link to="/dmca">/dmca</Link>
            <Link to="/privacy-policy">/privacyPolicy</Link>
            <Outlet />

        </div>
    )
}

export default Layout