import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Bookmarks, {loader as bookmarksLoader } from './routes/Bookmarks'
import RootLayout from './routes/RootLayout'
import NewBookmark, {action as newBookmarkAction} from './routes/NewBookmark'
import BookmarkDetails, { loader as bookmarkDetailsLoader } from './routes/BookmarkDetails'
import './index.css'

const router = createBrowserRouter([
  {path: '/', element: <RootLayout/>, children:[
    {path: '/', 
    element: <Bookmarks />, 
    loader: bookmarksLoader, 
    children:[
      {path: '/create-bookmark', element: <NewBookmark/>, action: newBookmarkAction},
      {path: '/bookmark/:id', element: <BookmarkDetails/>, loader: bookmarkDetailsLoader }
    ]},
  ]}, //our domain/
  

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router = {router} />
  </React.StrictMode>

)
