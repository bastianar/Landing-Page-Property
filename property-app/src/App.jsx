import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

import Home from "./Pages/Home";
import Property from "./Pages/Property";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property" element={<Property />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
