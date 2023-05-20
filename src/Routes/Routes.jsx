import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/main";
import Blog from "../Blog/Blog";
import Error from "../Error";
import Login from "../pages/Home/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [


        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>,
        },
        {
          path: '*',
          element: <Error></Error>,
        },
        {
          path: 'login',
          element: <Login></Login>,
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
        
        
      
      
      ]
    },
  ]);

  export default router;