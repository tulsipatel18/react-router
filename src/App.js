// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Nopage from "./pages/NoPage";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<Nopage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
