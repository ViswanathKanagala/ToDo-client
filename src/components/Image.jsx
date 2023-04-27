import React, { useEffect, useState } from 'react'
import UserNav from '../parts/userNav'
import styles from "./Public.module.css";
import { PencilFill } from 'react-bootstrap-icons';
import PostModal from './PostModal';
function Image() {
    const [post, setPost] = useState(false);
    const [posts, setPosts] = useState([]);
    const postModalHandler = (e) => {
        setPost(true);
      };
      useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch("http://localhost:5500/posts");
          const data = await response.json();
          console.log(data)
          setPosts((prev) => {
            const newPosts = [...data];
            return newPosts;
          });
        };
        fetchPosts();
      }, []);
      const addPostHandler = (postObj) => {
        setPosts((prevPosts) => {
          const newPosts = [...prevPosts, postObj];
          return newPosts;
        });
      };
  return (
    <div>
               <UserNav />

             {/* <li className={styles.hoverpen} onClick={postModalHandler}>
              <PencilFill /> Add a Post
            </li>
            {post && ( */}
          <PostModal change={setPost} add={addPostHandler} len={posts.length} />
        {/* )} */}
    </div>
  )
}

export default Image