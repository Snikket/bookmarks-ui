import Bookmark from "./Bookmark";
import classes from "./BookmarksList.module.css";
import { useLoaderData } from "react-router-dom";

function BookmarksList() {
  const bookmarks = useLoaderData();

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
