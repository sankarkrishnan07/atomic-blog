import { useCallback, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { faker } from "@faker-js/faker";
import Footer from "./components/common/Footer";
import ArchivePosts from "./components/ArchivePosts";
import Button from "./components/common/Button";

function App() {
  const [posts, setPosts] = useState(
    Array.from({ length: 30 }, createRandomPost)
  );
  const [isDark, setIsDark] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const showArchive = true;

  const filteredPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function createRandomPost() {
    return {
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      body: `${faker.hacker.phrase()}`,
    };
  }

  function handleClick() {
    setIsDark((isDark) => !isDark);
    document.documentElement.classList.toggle("dark-mode");
  }

  const handleAddPost = useCallback(function handleAddPost(newPost) {
    setPosts((posts) => [newPost, ...posts]);
  }, []);

  return (
    <div className="app-container">
      <Header
        setSearchQuery={setSearchQuery}
        posts={filteredPosts}
        setPosts={setPosts}
      />
      <Main posts={filteredPosts} handleAddPost={handleAddPost} />
      <ArchivePosts handleAddPost={handleAddPost} showArchive={showArchive} />
      <Footer />
      <Button customClass={"btn-dark-mode"} handleClick={handleClick}>
        {isDark ? "☀️" : "🌙"}
      </Button>
    </div>
  );
}

export default App;
