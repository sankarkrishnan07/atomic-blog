import { useState } from "react";
import "./search.scss";
import Proptypes from "prop-types";

export default function Search({ setSearchQuery, posts }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
    setSearchQuery(e.target.value);
  }

  return (
    <div className="app-search">
      <p>🚀 {posts.length} atomic posts found</p>
      <input
        type="text"
        name="search-posts"
        placeholder="Search posts..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

Search.propTypes = {
  setSearchQuery: Proptypes.func,
  posts: Proptypes.any,
};
