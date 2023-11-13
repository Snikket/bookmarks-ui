import NewBookmark from "./NewBookmark";
import Bookmark from "../components/Bookmark";
import BookmarksList from "../components/BookmarksList";
import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";
function Bookmarks() {

  return (
    <>
    <Outlet></Outlet>
      <main>
        <BookmarksList/>
      </main>
    </>
  );
}

export default Bookmarks;

export async function loader() {
  const response = await fetch("http://ec2-51-20-87-214.eu-north-1.compute.amazonaws.com:8080/bookmarks");
  const resData = await response.json();
  return resData.bookmarks;
}
