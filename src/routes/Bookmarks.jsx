import BookmarksList from "../components/BookmarksList";
import { Outlet } from "react-router-dom";
import * as Constants from "../utilities/constants"
function Bookmarks({client}) {
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
  const response = await fetch(Constants.API_ENDPOINT+"/bookmarks");
  const resData = await response.json();
  return resData.bookmarks;
}
