import React from "react";
import "./Comment.css";

const Comment = props => {
  return (
    <div className="comment-text">
      <span className="user">{props.comment.username}</span>
      {"props.comment"}
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};

export default Comment;
