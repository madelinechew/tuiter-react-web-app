import React from "react";

const NavigationSidebar = ({ active }) => {
  return (
    <>
      <div className="list-group">
        <a className="list-group-item">
          <span className="d-none d-xl-block ps-1">Tuiter</span>
        </a>
        <a
          href="/tuiter"
          className={`list-group-item list-group-item-action d-flex align-items-center ${
            active === "home" ? "active" : ""
          }`}
        >
          <i className="bi bi-house"></i>
          <span className="d-none d-xl-block ps-1">Home</span>
        </a>

        <a
          href="/tuiter/explore"
          className={`list-group-item list-group-item-action d-flex align-items-center ${
            active === "explore" ? "active" : ""
          }`}
        >
          <i className="bi bi-hash"></i>
          <span className="d-none d-xl-block ps-1">Explore</span>
        </a>

        <a
          href="/tuiter/notifications.html"
          className={`list-group-item list-group-item-action d-flex align-items-center ${
            active === "notifications" ? "active" : ""
          }`}
        >
          <i className="bi bi-bell"></i>
          <span className="d-none d-xl-block ps-1">Notifications</span>
        </a>

        <a
          href="/tuiter/messages.html"
          className={`list-group-item list-group-item-action d-flex align-items-center ${
            active === "messages" ? "active" : ""
          }`}
        >
          <i className="bi bi-envelope"></i>
          <span className="d-none d-xl-block ps-1">Messages</span>
        </a>
        <a
          href="/tuiter/bookmarks.html"
          className={`list-group-item list-group-item-action d-flex align-items-center ${
            active === "bookmarks" ? "active" : ""
          }`}
          tabIndex="-1"
        >
          <i className="bi bi-bookmark"></i>
          <span className="d-none d-xl-block ps-1">Bookmarks</span>
        </a>
        <a
          href="/tuiter/lists.html"
          className={`list-group-item list-group-item-action d-flex align-items-center ${
            active === "lists" ? "active" : ""
          }`}
        >
          <i className="bi bi-card-checklist"></i>
          <span className="d-none d-xl-block ps-1">Lists</span>
        </a>
        <a
          href="/tuiter/profile.html"
          className={`list-group-item list-group-item-action d-flex align-items-center ${
            active === "profile" ? "active" : ""
          }`}
          tabIndex="-1"
        >
          <i className="bi bi-person-circle"></i>
          <span className="d-none d-xl-block ps-1">Profile</span>
        </a>
        <a
          href="/tuiter/more.html"
          className={`list-group-item list-group-item-action d-flex align-items-center ${
            active === "more" ? "active" : ""
          }`}
          tabIndex="-1"
        >
          <i className="bi bi-three-dots"></i>
          <span className="d-none d-xl-block ps-1">More</span>
        </a>
      </div>
    </>
  );
};

export default NavigationSidebar;
