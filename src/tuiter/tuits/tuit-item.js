import React from "react";
import TuitStats from "./tuitStats";
import "./index.css";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();

  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <div className="list-group-item d-flex align-items-center container">
      <ul className="row w-100">
        <div className="col-auto">
          <img className="wd-follow-pfp" src={`/images/${tuit.image}`} />
        </div>
        <div className="col-10">
          <li>
            <i
              className="bi bi-x-lg wd-delete-button-position"
              onClick={() => deleteTuitHandler(tuit._id)}
            ></i>
            <b className="card-title"> {tuit.username} </b>
            <i className="bi bi-patch-check-fill text-primary"></i>
            <span className="text-secondary">
              {" "}
              {tuit.handle} · {tuit.time}{" "}
            </span>
          </li>
          <li className="text-secondary">{tuit.tuit}</li>
          <li>
            <TuitStats key={tuit._id} tuit={tuit} />
          </li>
        </div>
      </ul>
    </div>
  );
};
export default TuitItem;
