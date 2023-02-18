import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {    
    return(`
        <div class="row">
            <!-- search field and cog -->
            <div>
            <div class="d-flex align-items-center">
              <div class="input-group">
                <span class="input-group-text bg-white wd-span-search-bar">
                  <i class="fas fa-search text-secondary"></i>
                </span>
                <input type="text" class="form-control wd-input-search-bar" />
              </div>
              <a class="ms-auto" href="explore-settings.html">
                <i class="fa-solid fa-gear ps-2"></i>
              </a>
            </div>
          </div>
        </div>
            <ul class="nav mb-2 nav-tabs">
            <div class="mt-2">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For You </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
              </li>
            </ul>
          </div>
            </ul>
            <!-- image with overlaid text -->
            <div class="wd-image-container">
              <img class="wd-main-image" src="images/spaceship.png" />
              <b class="wd-image-title wd-bottom-left">SpaceX's Starship</b>
            </div>
                ${PostSummaryList()}
    `);
   }

   export default ExploreComponent;