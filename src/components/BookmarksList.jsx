import Bookmark from "./Bookmark";
import classes from "./BookmarksList.module.css";
import { useLoaderData } from "react-router-dom";
import * as Constants from '../utilities/constants';
function BookmarksList() {
  const bookmarks = useLoaderData();

  console.log("the api endpoint is:"+Constants.API_ENDPOINT);
  return (
    <>
      {bookmarks.length > 0 && (
        <ul className={classes.bookmarks}>
          {bookmarks.map((bookmark) => (
            <Bookmark key={bookmark.id} id={bookmark.id} name={bookmark.name} url={bookmark.url} />
          ))}
        </ul>
      )}

      {bookmarks.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no bookmarks yet!</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default BookmarksList;
