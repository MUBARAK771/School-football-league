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
import SignIn from "./website/pages/auth/SignIn";
import Matches from "./website/pages/Matches"
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.SIGNIN} element={<SignIn />} />
          <Route path="*" element={<Navigate to={PATHS.HOME} replace />} />
          <Route path={PATHS.MATCHES} element={<Matches/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App
