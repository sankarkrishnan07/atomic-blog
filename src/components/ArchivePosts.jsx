import Button from "./common/Button";
import PropTypes from "prop-types";
import "./archiveposts.scss";
import { memo, useState } from "react";
import { faker } from "@faker-js/faker";

const ArchivePosts = memo(function ArchivePosts({
  handleAddPost,
  showArchive,
}) {
  const [show, setShow] = useState(showArchive);

  const [archivePosts] = useState(() =>
    Array.from({ length: 10000 }, createRandomPost)
  );

  function createRandomPost() {
    return {
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      body: `${faker.hacker.phrase()}`,
    };
  }

  function hanldeClick() {
    setShow((show) => !show);
  }

  return (
    <div className="posts-archive">
      <h4 className="posts-archive__title">POSTS ARCHVIVE</h4>

      <Button handleClick={hanldeClick}>
        {show ? "Hide" : "Show"} Archive Posts
      </Button>

      {show && (
        <ul className="posts-archive__list">
          {archivePosts.map((post, i) => (
            <ArchivePost
              title={post.title}
              body={post.body}
              handleAddPost={handleAddPost}
              key={`post${i}`}
            />
          ))}
        </ul>
      )}
    </div>
  );
});

ArchivePosts.propTypes = {
  handleAddPost: PropTypes.any,
  showArchive: PropTypes.bool,
};

function ArchivePost({ title, body, handleAddPost }) {
  function handleClick() {
    handleAddPost({ title, body });
  }

  return (
    <li className="post-archive">
      <p>
        <strong>{title}: </strong>
        {body}
      </p>

      <Button handleClick={handleClick}>Add as new Post</Button>
    </li>
  );
}

ArchivePost.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  handleAddPost: PropTypes.any,
};

export default ArchivePosts;
