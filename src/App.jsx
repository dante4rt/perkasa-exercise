import { RouterProvider } from 'react-router-dom'
import './App.css'
import { Provider } from 'react-redux'
import router from './routes'

function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
