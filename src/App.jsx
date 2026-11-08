import React from 'react';
import Header from './components/Header';
import MainLayout from './layouts/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <h1>Home</h1>
      },
      {
        path: 'about',
        element: <h1>About</h1>
      },
      {
        path: 'contact',
        element: <h1>Contact</h1>
      },
      {
        path: 'skills',
        element: <h1>Skills</h1>
      },
      {
        path: 'projects',
        element: <h1>Projects</h1>
      }
    ]
  }
])
const App = () => {
  return <RouterProvider router={router} />
}
export default App;