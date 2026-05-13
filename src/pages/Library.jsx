import "./Pages.css";

function Library() {
  return (
    <div className="page">
      <h2>Thư viện của tôi</h2>
      <div className="library-grid">
        <div className="lib-card">🎵 Bài hát đã thích</div>
        <div className="lib-card">📋 Playlist của tôi</div>
        <div className="lib-card">🎤 Nghệ sĩ theo dõi</div>
        <div className="lib-card">💿 Album đã lưu</div>
      </div>
    </div>
  );
}

export default Library;
