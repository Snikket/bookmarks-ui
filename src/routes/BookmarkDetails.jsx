import { useLoaderData, Link, Form, redirect } from 'react-router-dom';
import React, {useState} from 'react'

import Modal from '../components/Modal';
import classes from './BookmarkDetails.module.css';
import * as Constants from '../utilities/constants'



function PostDetails() {
  const post = useLoaderData();

  const [postName, setPostName] = useState(post.name);

  const [urlName, setUrlName] = useState(post.url);
  
  
  console.log(post);
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
    <Form method='post' className={classes.form}>
      <p>
        <label htmlFor="body">Name</label>
        <textarea name="name" required rows={3} value={postName} onChange={e => setPostName(e.target.value)} />
      </p>
      <p>
        <label htmlFor="name">URL</label>
        <input type="text" name="url" required value={urlName} onChange={e => setUrlName(e.target.value)} />
        <input type='hidden' name="id" value={post.id} />
      </p>
      <p className={classes.actions}>
        <Link to=".." type="button" >
          Cancel
        </Link>
        <button>Submit</button>
      </p>
    </Form>
    </Modal>
  );
}

export async function action({request}){
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  console.log("postData:");
  console.log(postData);
  console.log("Formdata:");
  console.log(formData);
  await fetch(Constants.API_ENDPOINT+'/bookmarks/'+postData.id, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type':'application/json'
    }
  });
  
  return redirect('/');
}

export default PostDetails;
export async function loader(request) {
  const response = await fetch("https://bookmarks-service.onrender.com/bookmarks/"+request.params.id);
  const resData = await response.json();
  return resData.bookmark;
}

