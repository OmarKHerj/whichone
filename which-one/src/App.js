import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Post from "./pages/post"



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}