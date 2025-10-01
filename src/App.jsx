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
import SchoolSportsDashboard from "./dashboard/SchoolSportsDashboard"
import TeamDetailView from "./dashboard/TeamDetailView"
import OfficialsDashboard from "./dashboard/OfficialsDashboard"

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path={PATHS.HOME} element={<Home/>} />
          <Route path={PATHS.ADMINDASHBOARD} element={<AdminDashboard/>} />
          <Route path={PATHS.SCHOOLSPORTSDASHBOARD} element={<SchoolSportsDashboard/>} />
          <Route path={PATHS.TEAMDETAILVIEW} element={<TeamDetailView/>}/>
          <Route path={PATHS.OFFICIALSDASHBOARD} element={<OfficialsDashboard/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
