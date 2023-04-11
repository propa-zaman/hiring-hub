import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Statistics from './Components/Statistics/Statistics';
import Jobs from './Components/Jobs/Jobs';
import Blog from './Components/Blog/Blog';
import Error from './Components/Error/Error';
import Catagories from './Components/Catagories/Catagories';
import JobsDetails from './Components/JobsDetaills/JobsDetails';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('jobs.json')
      },
      {
        path: "jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "job/:jobId",
        element: <JobsDetails></JobsDetails>,
        loader: ({params}) => fetch(`jobs.json/${params.jobId}`)
      },
      {
        path: "catagories",
        element: <Catagories></Catagories>
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "appliedjobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
