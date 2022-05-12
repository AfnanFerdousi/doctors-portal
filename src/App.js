import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './pages/Shared/Navbar';
import Home from './pages/Home/Home';
import Appoinment from './pages/Appoinment/Appoinment';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import RequireAuth from './pages/Login/RequireAuth';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appoinment" element={
          <RequireAuth>            
            <Appoinment />
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
