const NavigationSidebar = () => {
  return(`
    <div class="list-group">
      <i class="fab fa-twitter list-group-item"></i>
      <a
        href="/tuiter/home.html"
        class="list-group-item list-group-item-action d-flex align-items-center"
      >
        <i class="fas fa-home"></i>
        <span class="d-none d-xl-block ps-1">Home</span>
      </a>
      <a
        href="/tuiter/explore.html"
        class="list-group-item list-group-item-action d-flex align-items-center active"
      >
        <i class="fa-solid fa-hashtag"></i>
        <span class="d-none d-xl-block ps-1">Explore</span>
      </a>
      <a
        href="/tuiter/notifications.html"
        class="list-group-item list-group-item-action d-flex align-items-center"
      >
        <i class="fa-solid fa-bell"></i>
        <span class="d-none d-xl-block ps-1">Notifications</span></a
      >
      <a
        href="/tuiter/messages.html"
        class="list-group-item list-group-item-action d-flex align-items-center"
      >
        <i class="fa-solid fa-envelope"></i>
        <span class="d-none d-xl-block ps-1">Messages</span></a
      >
      <a
        href="/tuiter/bookmarks.html"
        class="list-group-item list-group-item-action d-flex align-items-center"
        tabindex="-1"
      >
        <i class="fa-solid fa-bookmark"></i>
        <span class="d-none d-xl-block ps-1">Bookmarks</span></a
      >
      <a
        href="/tuiter/lists.html"
        class="list-group-item list-group-item-action d-flex align-items-center"
        tabindex="-1"
      >
        <i class="fa-solid fa-list"></i>
        <span class="d-none d-xl-block ps-1">Lists</span></a
      >
      <a
        href="/tuiter/profile.html"
        class="list-group-item list-group-item-action d-flex align-items-center"
        tabindex="-1"
      >
        <i class="fa-solid fa-user"></i>
        <span class="d-none d-xl-block ps-1">Profile</span></a
      >
      <a
        href="/tuiter/more.html"
        class="list-group-item list-group-item-action stack-padding d-flex align-items-center wd-left-padding"
        tabindex="-1"
      >
        <span class="fa-stack small wd-small">
          <i class="fas fa-circle fa-stack-2x"></i>
          <i class="fa fa-ellipsis text-secondary fa-stack-1x"></i
        ></span>
      <span class="d-none d-xl-block ps-1">More</span></a>
    </div>
    <button class="btn btn-primary wd-btn-offset-tuit rounded-pill">
      Tuit
    </button>
  `);
 }

 export default NavigationSidebar;