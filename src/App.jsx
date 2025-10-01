import React from "react"
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router'
import Home from "./website/Home"
import PATHS from "./Route"
import Register from "./website/pages/auth/Register"
import SignIn from "./website/pages/auth/SignIn";
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.REGISTER} element={<Register />} />
          <Route path={PATHS.SIGNIN} element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
