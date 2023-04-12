import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Login from './login/Login'
import { RouterProvider, createBrowserRouter} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Login /> },
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
