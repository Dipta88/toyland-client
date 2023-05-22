import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/main";
import Blog from "../Blog/Blog";
import Error from "../Error";
import Login from "../pages/Home/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllToy from "../components/AllToy";
import AddAToy from "../components/AddAToy";
import MyToys from "../components/MyToys";
import PrivateRoute from "./PrivateRoute";

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
              loader: () => fetch('https://toyland-server-henna.vercel.app/toys')

        },
        {
          path: 'addatoy',
          element: <AddAToy></AddAToy>

    },
    {
      path: 'mytoys',
      element: <MyToys></MyToys>,
      loader: () => fetch('https://toyland-server-henna.vercel.app/toys')

},
{
  path: 'mytoys',
  element: <MyToys></MyToys>,
  loader: () => fetch('https://toyland-server-henna.vercel.app/toys')

},
{
  path: 'mytoys',
  element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
}


        
        
      
      
      ]
    },
  ]);

  export default router;