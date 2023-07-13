import { createBrowserRouter } from 'react-router-dom'
import Layout from '../views/Layout'
import Home from '../views/Home';
import Calendar from '../views/Calendar';
import Attendance from '../views/Attendance';
import Schedule from '../views/Schedule';
import Login from '../views/Login';
import Register from '../views/Register';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/calendar',
                element: <Calendar />
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
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
])

export default router;