import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/main";
import Blog from "../Blog/Blog";
import Error from "../Error";
import Login from "../pages/Home/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllToy from "../components/AllToy";
import AddAToy from "../components/AddAToy";

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
          element: <SignUp></SignUp>,
        },
        {
              path: 'all-toys',
              element: <AllToy></AllToy>,

        },
        {
          path: 'addatoy',
          element: <AddAToy></AddAToy>

    },

        
        
      
      
      ]
    },
  ]);

  export default router;