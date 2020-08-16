import React from "react";
import "../css/BlogCard.css";

export default function BlogCard(props) {
  const { title, author, place, description } = props;
  return (
    <div className="blog-container">
      <div className="blog-title">{title}</div>
      <div className="author-container">
        <div className="author">Author: {author}</div>
        <div className="place">Place: {place}</div>
      </div>
      <div className="hide-show">
        <div className="description">{description}</div>
      </div>
    </div>
  );
}
