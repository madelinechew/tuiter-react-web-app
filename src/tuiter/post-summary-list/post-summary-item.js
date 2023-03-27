import React from "react";
import './index.css';

const PostSummaryItem = ({
  post
}) => {
  return (
    <div className="list-group-item d-flex align-items-center">
      <ul>
        <li className="text-secondary">
            {post.topic}
            <span className="text-secondary"> · {post.time} </span>
        </li>
        <li>
          <b>{post.userName}</b>
          <i className="fa-solid fa-circle-check"></i>
        </li>
        <li>
          <span>{post.title}</span>
        </li>
        <li className="text-secondary">{post.tweets}</li>
      </ul>
      <img className="wd-image-posts ms-auto" src={`/images/${post.image}`} />
    </div>
  );
};
export default PostSummaryItem;

