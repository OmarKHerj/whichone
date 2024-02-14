import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Post from "./pages/post.js";
import Compare from "./pages/compare.js";
import Howto from "./pages/howto.js";
import Deals from "./pages/deals.js";
import Contact from "./pages/contactus.js";

import './style.css';



const apiUrl = process.env.REACT_APP_API_URL;


// Assuming this code is in a .js file

// Function to fetch data
function fetchData() {
  if (apiUrl) {
    // Now you can use import.meta.env.VITE_API_URL safely
  } else {
    console.error("VITE_API_URL is not defined");
    // Handle the case where VITE_API_URL is not defined
  }
}

// App component
export default function App() {
    fetchData();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/how-to" element={<Howto />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}
