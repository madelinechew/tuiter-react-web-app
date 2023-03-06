import React from "react";
import PostSummaryItem from "./post-summary-item";
import posts from "./posts.json"

const PostSummaryList = () => {
   return (
        <ul className="list-group">
           {
            posts.map(post => 
                <PostSummaryItem
                key={post._id} post={post}/>
            )
            }
        </ul>
    ); 
}

export default PostSummaryList; 