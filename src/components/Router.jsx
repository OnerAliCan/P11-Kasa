import React from 'react'
import { createBrowserRouter } from 'react-router'
import Layout from './Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Logement from '../pages/Logement'
import ErrorPage from '../pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'logement/:id',
        element: <Logement />,
      },
      {
        path: '404',
        element: <ErrorPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
])

export default router
