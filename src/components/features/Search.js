//https://www.emgoto.com/react-search-bar/
const SearchBar = () => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search posts</span>
    </label>
    <input
      type="text"
      id="header-search"
      style={{ width: 250 }}
      placeholder="Search posts"
      name="s"
    />
    <button
      type="submit"
      style={{
        backgroundColor: "white",
      }}
    >
      Search
    </button>
  </form>
);

export default SearchBar;
