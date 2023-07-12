import { createBrowserRouter } from 'react-router-dom'
import Layout from '../views/Layout'
import Home from '../views/Home';
import Calendar from '../views/Calendar';

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
            }
        ]
    }
])

export default router;