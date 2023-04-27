import React, { useEffect, useState } from "react";
import Post from "./Post";
import styles from "./Public.module.css";
import PostModal from "./PostModal";
import { PencilFill } from "react-bootstrap-icons";
import UserNav from "../parts/userNav";
import { useSelector } from "react-redux";


const Public = () => {
  const user = useSelector((state) => state.user.user);

  const [post, setPost] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:5000/posts");
      const data = await response.json();
      console.log(data)
      setPosts((prev) => {
        const newPosts = [...data];
        return newPosts;
      });
    };
    fetchPosts();
  }, []);

  const postModalHandler = (e) => {
    setPost(true);
  };

  const addPostHandler = (postObj) => {
    setPosts((prevPosts) => {
      const newPosts = [...prevPosts, postObj];
      return newPosts;
    });
  };

  const deletePost = (id) => {
    setPosts((prev) => {
      let newPosts = prev.filter((post) => post.id !== id);
      return newPosts;
    });
  };

  return (
    <>
      <UserNav />
      {/* <div className={styles.public}> */}
        {/* <div className={`${styles.align}`}> */}
          <div className="container">
          {posts.map((data) => {
            return <Post data={data} delete={deletePost} key={data.id} />;
          })}
          </div>
        {/* </div> */}

      {/* </div> */}
    </>
  );
};

export default Public;
