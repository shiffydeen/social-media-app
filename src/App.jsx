import { useState } from 'react';
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import NavBar from './components/navBar/navBar';
import LeftBar from './components/leftBar/leftBar';
import RightBar from './components/rightBar/rightBar';
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import { createBrowserRouter, RouterProvider, Outlet, Navigate, Route, createRoutesFromElements } from 'react-router-dom';
import './style.scss'
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';


function App() {

  const currentUser = true;

  const {darkMode} = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <NavBar />
        <div style={{display: 'flex'}}>
          <LeftBar />
          <div style={{flex: 6}}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }

    return children
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route>
      <Route path='/' element={
        <ProtectedRoute>
            <Layout />
        </ProtectedRoute>
        }> 
          <Route path='/' element={<Home />}/>
          <Route path='/profile/:id' element={<Profile />}/>
      </Route>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Route>
    )
  );


  
 

  return (
    
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
