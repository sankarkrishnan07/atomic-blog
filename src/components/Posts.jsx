import PropTypes from "prop-types";
import "./posts.scss"

export default function Posts({ posts }) {
  return (
    <ul className="posts">
      {posts.map((post, i) => (
        <Post title={post.title} body={post.body} key={`post${i}`} />
      ))}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.array,
};

function Post({ title, body }) {
  return (
    <li className="post">
      <h4 className="post-title">{title}</h4>
      <p className="post-body">{body}</p>
    </li>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};
