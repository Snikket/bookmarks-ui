import classes from "./NewBookmark.module.css";
import Modal from '../components/Modal'
import {Link, Form, redirect } from 'react-router-dom'
function NewBookmark() {

  return (
    <Modal>
    <Form method='post' className={classes.form}>
      <p>
        <label htmlFor="body">Name</label>
        <textarea id="body" name="name" required rows={3}/>
      </p>
      <p>
        <label htmlFor="name">URL</label>
        <input type="text" name="url" id="name" required/>
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

export default NewBookmark;

export async function action({request}){
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch('http://ec2-51-20-87-214.eu-north-1.compute.amazonaws.com:8080/bookmarks', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type':'application/json'
    }
  });
  
  return redirect('/');
}