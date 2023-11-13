import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './BookmarkDetails.module.css';

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;
export async function loader({params}) {
    const response = await fetch('http://ec2-51-20-87-214.eu-north-1.compute.amazonaws.com:8080/bookmarks/' + params.id)
    const resData = await response.json();
    return resData.post;
}