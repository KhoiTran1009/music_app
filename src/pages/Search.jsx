import "./Pages.css";

function Search() {
  return (
    <div className="page">
      <h2>Tìm kiếm</h2>
      <input
        className="search-input"
        type="text"
        placeholder="Tìm bài hát, nghệ sĩ..."
      />
      <p className="page-sub">Nhập tên bài hát hoặc nghệ sĩ để tìm kiếm</p>
    </div>
  );
}

export default Search;
