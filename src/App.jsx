import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Navbar from './navbar.jsx'
import Home from './home.jsx'
import About from './about.jsx'
import Projects from './project.jsx'
import Contact from './contact.jsx'
import Journey from './journey.jsx'
import Resume from './resume.jsx'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home /></>,
    },
    {
      path: '/about',
      element: <><Navbar /><About /></>,
    },
    {
      path: '/projects',
      element: <><Navbar /><Projects /></>,
    },
    {
      path: '/contact',
      element: <><Navbar /><Contact /></>,
    },
    {
      path: '/journey',
      element: <><Navbar /><Journey /></>,
    },
    {
      path: '/resume',
      element: <><Navbar /><Resume /></>,
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
