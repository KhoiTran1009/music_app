import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="logo">🎵 MusicApp</div>

      <nav>
        <Link
          to="/"
          className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
        >
          🏠 Trang chủ
        </Link>
        <Link
          to="/search"
          className={`nav-item ${location.pathname === "/search" ? "active" : ""}`}
        >
          🔍 Tìm kiếm
        </Link>
        <Link
          to="/library"
          className={`nav-item ${location.pathname === "/library" ? "active" : ""}`}
        >
          📚 Thư viện
        </Link>
      </nav>

      <hr className="divider" />
      <p className="playlist-label">Playlist của tôi</p>
      <Link to="/library" className="nav-item">
        Chill Vibes
      </Link>
      <Link to="/library" className="nav-item">
        Top Hits 2025
      </Link>
      <Link to="/library" className="nav-item">
        V-Pop Hits
      </Link>
    </div>
  );
}

export default Sidebar;
