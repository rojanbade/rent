import React, { memo, useState, useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../../css/posts.css";
import { ThemeContext } from "../../context/themeContext";

const User = memo(function User() {
  const [posts, setPosts] = useState([]);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // handle success
        setPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const createPost = async () => {
    try {
      await axios({
        method: "post",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1,
        }),
      });
    } catch (e) {
      console.log(e);
    }
  };

  const updatePost = () => {
    axios({
      method: "put",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      data: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    });
  };

  const deletePost = async () => {
    try {
      await axios({
        method: "delete",
        url: "https://jsonplaceholder.typicode.com/posts/1",
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={`post-container-${theme}`}>
      <div className="post-header">
        <h1>Posts</h1>
        <div className="buttons">
          <button onClick={createPost} className="post-btn">
            Create
          </button>
          <button onClick={updatePost} className="post-btn">
            Update
          </button>
          <button onClick={deletePost} className="post-btn">
            Delete
          </button>
        </div>
      </div>
      <div className="post-card-container">
        {posts.map((item) => {
          return (
            <div className="cards" key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default User;
