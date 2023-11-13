import classes from './Bookmark.module.css';
import { Link } from 'react-router-dom';
function Bookmark(props){
    return (
    <li className={classes.bookmark}>
        <Link to={"bookmark/"+props.id}>
        <p classes={classes.author}>Name: {props.name}</p>
        <p className={classes.text}>URL: {props.url}</p>
        </Link>
        </li>);
}

export default Bookmark;