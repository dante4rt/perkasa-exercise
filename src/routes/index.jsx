import { createBrowserRouter, redirect } from 'react-router-dom'
import Layout from '../views/Layout'
import Home from '../views/Home';
import Attendance from '../views/Attendance';
import Schedule from '../views/Schedule';
import Login from '../views/Login';
import Register from '../views/Register';

const router = createBrowserRouter([
    {
        element: <Layout />,
        loader: () => {
            const token = localStorage.getItem("access_token")

            if (!token) throw redirect('/login')

            return null;
        },
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/attendance',
                element: <Attendance />
            },
            {
                path: '/schedule',
                element: <Schedule />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />,
        loader: () => {
            const token = localStorage.getItem("access_token")

            // if (token) throw redirect('/')

            return null;
        }
    },
    {
        path: '/register',
        element: <Register />,
        loader: () => {
            const token = localStorage.getItem("access_token")

            if (token) throw redirect('/')

            return null;
        }
    }
])

export default router;