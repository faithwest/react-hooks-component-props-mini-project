import React from "react";
import blogData from "../data/blog";
import About from "./components/About";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList"; // Import the ArticleList component

console.log(blogData);

function App() {
  const blogName = "Overreacted";
  const imageUrl = "./assets/logo.js";
  const aboutText = "I explain with words and code.";

  return (
    <div className="App">
      <Header blogName={blogName} /> {/* Remove quotes around {blogName} */}
      <About imageUrl={imageUrl} aboutText={aboutText} />
      <ArticleList posts={blogData.posts} /> {/* Render the ArticleList component */}
    </div>
  );
}

export default App;
