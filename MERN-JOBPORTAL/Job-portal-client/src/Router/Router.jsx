import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../components/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SallaryPage from "../Pages/SallaryPage";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../components/Login";
import JobDetail from "../Pages/JobDetail";
import Signup from "../components/Signup";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children : [
        {
            path : "/",
            element : <Home/> 
        },
        {
          path: "/post-job",
          element: <CreateJob/>
        },
        {
          path: "/my-job",
          element: <MyJobs/>
        },
        {
          path: "/salary",
          element: <SallaryPage/>
        },
        {
          path: "edit-job/:id",
          element: <UpdateJob/>,
          loader: ({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/sign-up",
          element: <Signup/>,
        },
        {
          path: "/job/:id",
          element: <JobDetail/>,
        },
       
      ]
    },
  ]);

  export default router;