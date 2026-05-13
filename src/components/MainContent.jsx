import "./MainContent.css";

const playlists = [
  { id: 1, emoji: "🎧", name: "Chill Vibes", desc: "50 bài hát" },
  { id: 2, emoji: "🔥", name: "Top Hits", desc: "V-Pop hot nhất" },
  { id: 3, emoji: "🌙", name: "Late Night", desc: "Nhạc đêm khuya" },
];

const songs = [
  {
    id: 1,
    emoji: "🎵",
    name: "Waiting For You",
    artist: "MONO",
    duration: "3:45",
  },
  {
    id: 2,
    emoji: "🎶",
    name: "Có Chắc Yêu Là Đây",
    artist: "Sơn Tùng M-TP",
    duration: "3:22",
  },
  {
    id: 3,
    emoji: "🎸",
    name: "Hãy Trao Cho Anh",
    artist: "Sơn Tùng M-TP",
    duration: "4:10",
  },
];

function MainContent() {
  return (
    <div className="main-content">
      {/* Thanh tìm kiếm */}
      <div className="search-bar">
        <span>🔍</span>
        <input type="text" placeholder="Tìm bài hát, nghệ sĩ, playlist..." />
      </div>

      {/* Hero / Banner */}
      <div className="hero">
        <div className="hero-img">🎵</div>
        <div className="hero-text">
          <h2>Chào buổi tối!</h2>
          <p>Nghe những bài nhạc hay nhất hôm nay</p>
          <button className="hero-btn">Phát nhạc ngay</button>
        </div>
      </div>

      {/* Playlist nổi bật */}
      <h3 className="section-title">Playlist nổi bật</h3>
      <div className="card-grid">
        {playlists.map((p) => (
          <div className="card" key={p.id}>
            <div className="card-img">{p.emoji}</div>
            <p className="card-name">{p.name}</p>
            <p className="card-sub">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Danh sách bài hát */}
      <h3 className="section-title">Bài hát gần đây</h3>
      <div className="song-list">
        {songs.map((song, index) => (
          <div className="song-item" key={song.id}>
            <span className="song-num">{index + 1}</span>
            <div className="song-thumb">{song.emoji}</div>
            <div className="song-info">
              <p className="song-name">{song.name}</p>
              <p className="song-artist">{song.artist}</p>
            </div>
            <span className="song-duration">{song.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainContent;
