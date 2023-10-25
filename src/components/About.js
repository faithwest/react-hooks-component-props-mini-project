import React from "react";

function About(props) {
  const { imageUrl, aboutText } = props;
  const defaultImageUrl = "https://via.placeholder.com/215";
  const altText = "blog logo";

  return (
    <aside>
      <img src={imageUrl || defaultImageUrl} alt={altText} />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
