import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Footer />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;
