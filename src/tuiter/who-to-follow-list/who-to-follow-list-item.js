import React from "react";
import './index.css';

const WhoToFollowListItem = (
    {
        who
    }
) => {
    return(
        <div className="list-group-item d-flex align-items-center">
            <img className="wd-follow-pfp" src={`/images/${who.avatarIcon}`} />
                <div className="wd-follow-info">
                  <b>{who.userName}</b>
                  <i className="fa-solid fa-circle-check"></i>
                  <br />
                  @{who.handle}
                </div>
            <button className="btn btn-primary rounded-pill ms-auto">
                Follow
            </button>
        </div>
    );
};

export default WhoToFollowListItem;