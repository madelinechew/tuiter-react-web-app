function WhoToFollowListItem(who) { 
    return (`
        <div class="list-group-item d-flex align-items-center">
            <img class="wd-follow-pfp" src="${who.avatarIcon}" />
                <div class="follow-info">
                  <b>${who.userName}</b>
                  <i class="fa-solid fa-circle-check"></i>
                  <br />
                  @${who.handle}
                </div>
            <button class="btn btn-primary rounded-pill ms-auto">
                Follow
            </button>
        </div>
    `);
}

export default WhoToFollowListItem;