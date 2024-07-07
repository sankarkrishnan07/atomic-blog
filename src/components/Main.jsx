import FormAddPosts from "./FormAddPosts";
import Posts from "./Posts";
import PropTypes from "prop-types";

export default function Main({ posts, handleAddPost }) {
  return (
    <main className="app-main">
      <FormAddPosts handleAddPost={handleAddPost} />
      <Posts posts={posts} />
    </main>
  );
}

Main.propTypes = {
  posts: PropTypes.any,
  handleAddPost: PropTypes.func,
};
