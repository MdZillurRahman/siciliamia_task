import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home itemsPerPage={15} />} />
        <Route path="/home" element={<Home itemsPerPage={15} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
