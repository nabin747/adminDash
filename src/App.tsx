import React from 'react'
// import './App.css';
import { WelcomeDash } from './components/welcomeDashboard/WelcomeDas';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { SignInDash } from './components/SignInDas/SignInDash';
import { Dashboard } from './components/mainDashboard/Dashboard';


function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path='/' element={<WelcomeDash />} />
         <Route path='/sign' element={<SignInDash />} />
         <Route path='/dashboard' element={<Dashboard />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
