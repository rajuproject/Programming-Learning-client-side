import { createBrowserRouter } from "react-router-dom"
import Booking from "../components/Booking"
import ErrorPage from "../components/ErrorPage"
import Home from "../components/Home"
import Login from "../components/Login"
import Profile from "../components/Profile"
import Register from "../components/Register"
import Main from "../layout/Main"
import PrivateRoute from "./PrivateRoute"

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },

        {
          path: '/booking',
          element: (
            <PrivateRoute>
              <Booking />
            </PrivateRoute>
          ),
        },
        {
          path: '/profile',
          element: (
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          ),
        },
      ],
    },
  ])
  
  export default router
  