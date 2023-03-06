import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import { Home } from "./pages/Home";
import { Bassins } from "./pages/Bassins";
import { Pompage } from "./pages/Pompage";
import { DriveME } from "./pages/DriveME";
import { About } from "./pages/About";
import { Notfound } from "./pages/Notfound";
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    let body = document.querySelector('body')
    body.style.height = window.innerHeight + 'px'
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/bassins" element={<Bassins/>} />
          <Route path="/pompage" element={<Pompage/>} />
          <Route path="/drive-me" element={<DriveME/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Notfound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
