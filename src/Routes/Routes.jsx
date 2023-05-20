import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/main";
import Blog from "../Blog/Blog";
import Error from "../Error";

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
        }
        
        
      
      
      ]
    },
  ]);

  export default router;