//Complete the necessary code in this file
import React, { useState } from "react";
import PostsContainer from "./PostsContainer";
import SearchBarContainer from "../SearchBar/SearchBarContainer.js";
import dummydata from "../dummy-data.js";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = () => {
  const [postData, setPostData] = useState(dummydata);
  return (
    <div className="posts-container-wrapper">
      <SearchBarContainer />
      <PostsContainer postData={postData} />
    </div>
  );
};

export default PostsPage;
