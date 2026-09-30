import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Home from './components/Home.jsx'
import Moviedisplay from './components/Moviedisplay.jsx'
import Movies from './components/movies.jsx'
import MyList from './components/MyList.jsx'

const router = createBrowserRouter([
  
  {
    path:"/",
    element:<Home />,
  },
  {
    path:"/movies",
    element:<Movies />,
  },
  {
    path:"/movie/:id",
    element:<Moviedisplay />,
  },
  {
    path:"/mylist",
    element:<MyList />,
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
