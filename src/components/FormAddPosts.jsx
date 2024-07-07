import "./formaddposts.scss";
import Button from "./common/Button";
import { useState } from "react";
import PropTypes from "prop-types";

export default function FormAddPosts({ handleAddPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleAddPost({ title, body });
  }

  return (
    <form className="app-form__add-posts" onSubmit={handleSubmit}>
      <input
        type="text"
        name="post-title"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="post-body"
        placeholder="Post Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <Button>Add Post</Button>
    </form>
  );
}

FormAddPosts.propTypes = {
  handleAddPost: PropTypes.func,
};
