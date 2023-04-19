import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "../pages/Home";
import About from "../pages/About";
import Navbar from "./Navbar";

const RoutesComp = () => {
  return (
    <>
      {/* <Router basename="navbar-project"> */}
      <Router>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
};

export default RoutesComp;
