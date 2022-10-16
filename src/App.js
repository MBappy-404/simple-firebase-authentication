import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './componennts/Home/Home';
import Login from './componennts/LogIn/Login';
import Order from './componennts/Orders/Order';
import Register from './componennts/Register/Register';
import Main from './Layout/Main';
import PrivatePath from './Private/PrivatePath';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <PrivatePath><Home></Home></PrivatePath>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {

          path:'/orders',
          element:<PrivatePath><Order></Order></PrivatePath>
        },
      ]
    }
  ])
  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
