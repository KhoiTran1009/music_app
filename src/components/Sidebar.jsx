import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">🎵 MusicApp</div>
      <nav>
        <a href="#" className="nav-item active">
          🏠 Trang chủ
        </a>
        <a href="#" className="nav-item">
          🔍 Tìm kiếm
        </a>
        <a href="#" className="nav-item">
          📚 Thư viện
        </a>
      </nav>
      <hr className="divider" />
      <p className="playlist-label">Playlist của tôi</p>
      <a href="#" className="nav-item">
        Chill Vibes
      </a>
      <a href="#" className="nav-item">
        Top Hits 2025
      </a>
      <a href="#" className="nav-item">
        V-Pop Hits
      </a>
    </div>
  );
}

export default Sidebar;
