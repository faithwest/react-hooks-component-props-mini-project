import React from "react";

function Article(props) {
  const { title, date, body } = props;
  const articles = [
    {
      title:"Components 101",
      date:"December 15, 2020",
      preview:"Setting up the building blocks of your site",
    },
  ];
  return (

    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small> {/*<small>{date ? date : "January 1, 1970"}</small>*/}
      <p>{body}</p>
    </article>

  );
}

export default Article;
/*pass the article as props parameter
define your props that needs to be exported=title ...
recognize the html and react elements
to show in html,use return and it is basically html structures
passing props involves using curly brackets
*/
