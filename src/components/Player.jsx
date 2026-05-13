import "./Player.css";

function Player() {
  return (
    <div className="player">
      <div className="player-left">
        <div className="thumb">🎵</div>
        <div>
          <p className="song-title">Waiting For You</p>
          <p className="song-artist">MONO</p>
        </div>
      </div>

      <div className="player-center">
        <div className="controls">
          <button>⏮</button>
          <button className="play-btn">⏸</button>
          <button>⏭</button>
        </div>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>

      <div className="player-right">
        🔊
        <div className="volume-bar">
          <div className="volume-fill"></div>
        </div>
      </div>
    </div>
  );
}

export default Player;
