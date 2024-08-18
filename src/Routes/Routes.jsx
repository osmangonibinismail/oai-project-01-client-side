import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Products from "../Pages/Products/Products";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Login></Login>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/products',
          element: <PrivateRoute><Products></Products></PrivateRoute>
        }
      ]
    },
    {
        path: 'dashboard',
        element: '/',
        children: [
            // {
            //     path: 'products',
            //     element: 
            // }
        ]
    }
  ]);