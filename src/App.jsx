import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import { Home } from "./pages/Home";
import { Bassins } from "./pages/Bassins";
import { Pompage } from "./pages/Pompage";
import { About } from "./pages/About";
import { Notfound } from "./pages/Notfound";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/bassins" element={<Bassins/>} />
          <Route path="/pompage" element={<Pompage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Notfound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
