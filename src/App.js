import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './pages/Shared/Navbar';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
