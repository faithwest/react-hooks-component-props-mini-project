import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';




function App() {
  const blogName = "Overreacted";
  const imageUrl = "./assets/logo.js";
  const aboutText = "I explain with words and code.";
  
  //give the page some posts// add as many
  const posts = [
    {
      id: 1,
      title: "Article 1",
      date: "January 1, 2023",
      body: "This is the content of article 1",
      
    },
  ];
  return (
    <div className="App">
      <Header blogName={blogName} /> 
      <About imageUrl={imageUrl} aboutText={aboutText} />
      <ArticleList posts={posts} /> 
    </div>
  );
}

export default App;
