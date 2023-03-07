import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route  } from "react-router-dom";


const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
