import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './pages/Shared/Navbar';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer';
import Appoinment from './pages/Appoinment/Appoinment';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appoinment" element={<Appoinment />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
