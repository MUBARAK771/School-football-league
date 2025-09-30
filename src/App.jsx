import React from "react"
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router'
import Home from "./website/Home"
import AdminDashboard from "./dashboard/AdminDashboard"
import PATHS from "./Route"
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path={PATHS.HOME} element={<Home/>} />
          <Route path={PATHS.ADMINDASHBOARD} element={<AdminDashboard/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
