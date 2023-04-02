import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  const onLikeClick = () => {
    let newTuit = { ...tuit, likes: tuit.likes + 1, liked: !tuit.liked };

    dispatch(updateTuitThunk(newTuit));
  };

  const onDisikeClick = () => {
    let newTuit = { ...tuit, likes: tuit.likes - 1, liked: !tuit.liked };
    dispatch(updateTuitThunk(newTuit));
  };

  const onUnlike = () => {
    let newTuit = { ...tuit, dislikes: tuit.dislikes + 1, disliked: !tuit.disliked };

    dispatch(updateTuitThunk(newTuit));
  };

  const undoUnlike = () => {
    let newTuit = { ...tuit, dislikes: tuit.dislikes - 1, disliked: !tuit.disliked };
    dispatch(updateTuitThunk(newTuit));
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
          {tuit.liked ? (
            <i
              onClick={() => onDisikeClick(tuit)}
              className="bi bi-heart-fill text-danger"
            ></i>
          ) : (
            <i onClick={() => onLikeClick(tuit)} className="bi bi-heart"></i>
          )}
          <span> {tuit.likes} </span>
        </div>

        <div className="col-3">
          {tuit.disliked ? (
            <i
              onClick={() => undoUnlike(tuit)}
              className="bi bi-hand-thumbs-down-fill text-secondary"
            ></i>
          ) : (
            <i onClick={() => onUnlike(tuit)} className="bi bi-hand-thumbs-down"></i>
          )}
          <span> {tuit.dislikes} </span>
        </div>

        <div className="col-3">
          <i className="bi bi-share"></i>
        </div>
      </div>
    </div>
  );
};
export default TuitStats;
