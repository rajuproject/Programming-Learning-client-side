
import Main from '../layout/Main';
import Home from '../components/Home';
import PrivateRoute from '../routes/PrivateRoute'
import Login from '../components/Login';
import Register from '../components/Register'
import Profile from '../components/profile'




import { createBrowserRouter } from "react-router-dom";
import Category from '../components/Categories/Category';
import News from '../components/News/News';

import PremiumAccess from '../components/PremiumAccess';
import Blog from '../Blog/Blog';
import Faq from '../Faq/Faq';
import Courses from '../Courses/Courses';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
                
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://book-server-mu.vercel.app/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://book-server-mu.vercel.app/news/${params.id}`)
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
                path:'/courses',
                element:<Courses></Courses>,
                loader: () => fetch('https://book-server-mu.vercel.app/news')
            },
            {
                path:'/Faq',
                element: <Faq></Faq>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },

            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/premium',
                element: <PrivateRoute><PremiumAccess></PremiumAccess></PrivateRoute>,
                loader: ({params}) => fetch(`https://book-server-mu.vercel.app/news/${params.id}`)
            }
        ]
    }
])