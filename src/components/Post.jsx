import classes from './Post.module.css';
import { Link } from 'react-router-dom';
function Post(props){
    return (
    <li className={classes.post}>
        <Link to={"post/"+props.id}>
        <p classes={classes.author}>Author: {props.author}</p>
        <p className={classes.text}>Book: {props.body}</p>
        </Link>
        </li>);
}

export default Post;