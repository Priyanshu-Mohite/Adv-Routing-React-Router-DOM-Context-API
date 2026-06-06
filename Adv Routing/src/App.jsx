import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import PageNotFound from "./pages/PageNotFound";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Moto from "./pages/Moto";
import MotoDetails from "./pages/MotoDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} >
          <Route path="mens" element={<Mens />} />
          <Route path="womens" element={<Womens />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />

        <Route path="/moto" element={<Moto />} />

        <Route path="/moto/:id" element={<MotoDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
