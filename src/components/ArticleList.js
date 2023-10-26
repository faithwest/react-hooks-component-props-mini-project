import React from "react";
import Article from "./Article"; 

function ArticleList(props) {
  const { posts } = props;

  return (
    <main>
      {posts.map((post, index) => (
        <Article
          key={index} // Use a unique key, like index
          title={post.title} // title as a prop
          date={post.date} // date as a prop
          body={post.body} //body as a prop
        />
      ))}
    </main>
  );
}

export default ArticleList;