import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './login-register/Login-Register';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App handleOpen={LoginPage.handleOpen}/>,
    children: [
      { index: true, element: <LoginPage /> },
      {

      },
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
