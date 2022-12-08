//https://www.emgoto.com/react-search-bar/
const SearchBar = () => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search posts</span>
    </label>
    <input
      type="text"
      id="header-search"
      style={{
        width: 250,
        borderRadius: "15px",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingLeft: "10px",
        marginBottom: "5%",
      }}
      placeholder="Search posts..."
      name="s"
    />
  </form>
);
export default SearchBar;
