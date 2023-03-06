import React from "react";
import './index.css';

const PostSummaryItem = ({
  post = {
    topic: "FAFAFAAF",
    userName: "SpaceX",
    time: "2h",
    title:
      "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    image: "tesla.jpeg",
  },
}) => {
  return (
    <div className="list-group-item d-flex align-items-center">
      <ul>
        <li className="text-secondary">
            {post.topic}
            <span className="text-secondary"> . {post.time} </span>
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
