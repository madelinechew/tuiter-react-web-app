import React from "react";
import { useDispatch } from "react-redux";
import { liked } from "./tuits-reducer";
import { unliked } from "./tuits-reducer";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  const onLikeClick = () => {
    dispatch(liked(tuit));
  };

  const onDisikeClick = () => {
    dispatch(unliked(tuit));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
            <i className="bi bi-chat"></i>
          <span> {tuit.replies} </span>
        </div>

        <div className="col-3">
            <i className="bi bi-arrow-repeat"></i>
          <span> {tuit.retuits} </span>
        </div>

        <div className="col-3">
            {tuit.liked ? <i onClick={() => onDisikeClick(tuit)} className="bi bi-heart-fill text-danger"></i> : <i onClick={() => onLikeClick(tuit)} className="bi bi-heart"></i>}
          <span> {tuit.likes} </span>
        </div>

        <div className="col-3">
            <i className="bi bi-share"></i>
        </div>
      </div>
    </div>
  );
};
export default TuitStats;
