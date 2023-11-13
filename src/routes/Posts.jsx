import NewPost from "./NewPost";
import Post from "../components/Post";
import PostsList from "../components/PostsList";
import MainHeader from "../components/MainHeader";
import { useState } from "react";
import { Outlet } from "react-router-dom";
function Posts() {

  return (
    <>
    <Outlet></Outlet>
      <main>
        <PostsList/>
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
