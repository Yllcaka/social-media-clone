import React, { useEffect, useState } from "react";
import homeApi from "../api/home";
import Post from "./Post";
import CreatePost from "./CreatePost";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [postsData, setPostsData] = useState([]);
  useEffect(() => {
    (async () => {
      const postsDataApi = await homeApi();
      setPostsData(postsDataApi);
    })();
  }, []);
  useEffect(() => {
    if (postsData) {
      let newPosts = postsData.map((post) => {
        return <Post key={post._id} {...post} />;
      });
      setPosts(newPosts);
    }
  }, [postsData]);

  return (
    <div>
      <CreatePost />
      {posts}
    </div>
  );
};

export default Home;
