import Logo from "./Logo";
import Search from "./Search";
import Button from "./common/Button";
import "./header.scss";
import PropTypes from "prop-types";

export default function Header({ setPosts, setSearchQuery, posts }) {
  return (
    <header className="app-header">
      <Logo />
      <div className="app-header__actions">
        <Search setSearchQuery={setSearchQuery} posts={posts} />
        <Button handleClick={() => setPosts([])}>Clear Posts</Button>
      </div>
    </header>
  );
}

Header.propTypes = {
  setPosts: PropTypes.func,
  setSearchQuery: PropTypes.func,
  posts: PropTypes.any,
};
