// import { createBrowserRouter } from "react-router-dom";
// import Main from "../../layout/Main";
// import Category from "../../Pages/Category/Category/Category";
// import Home from "../../Pages/Home/Home/Home";
// import Login from "../../Pages/Login/Login/Login";
// import Register from "../../Pages/Login/Register/Register";
// import News from "../../Pages/News/News/News";
// import Profile from "../../Pages/Others/Profile/Profile";
// import TermsAndConditions from "../../Pages/Others/TermsAndContions/TermsAndConditions";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Main from '../layout/Main';
import Home from '../components/Home';
import PrivateRoute from '../routes/PrivateRoute'
import Login from '../components/Login';
import Register from '../components/Register'
import Profile from '../components/profile'




import { createBrowserRouter } from "react-router-dom";
import Category from '../components/Categories/Category';
import News from '../components/News/News';
import TermsAndConditions from '../components/TermsAndCondition/TermsAndConditions.js'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://dragon-news-server-seven.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://dragon-news-server-seven.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://dragon-news-server-seven.vercel.app/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])