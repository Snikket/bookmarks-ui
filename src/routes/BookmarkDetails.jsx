import { useLoaderData, Link, Form } from 'react-router-dom';
import React, {useState} from 'react'

import Modal from '../components/Modal';
import classes from './BookmarkDetails.module.css';
import * as Constants from '../utilities/constants'



function PostDetails() {
  const post = useLoaderData();

 // Use separate state for the name input
 const [name, setName] = useState(post ? post.name : '');

 const handleNameChange = (event) => {
   const { name, value } = event.target;

   if (name === 'name') {
     setName(value);
   }
 };

 const [url, setUrl] = useState(post ? post.url : '');

 const handleUrlChange = (event) => {
  const { url, value } = event.target;

  if (url === 'url') {
    setUrl(value);
  }
};

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
        <textarea name="name" required rows={3} value={post.name} onChange={handleNameChange}/>
      </p>
      <p>
        <label htmlFor="name">URL</label>
        <input type="text" name="url" required value={post.url} onChange={handleUrlChange}/>
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
  event.preventDefault(); 
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch(Constants.API_ENDPOINT+'/bookmarks', {
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
  const response = await fetch("https://bookmarks-api-b5s4.onrender.com/bookmarks/"+request.params.id);
  const resData = await response.json();
  return resData.bookmark;
}

