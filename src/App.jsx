import './App.css'
import Home from './components/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import { Analytics } from "@vercel/analytics/react"; // <-- CORRETO para React

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/experience" element={<Experience />}/>
                    <Route path="/projects" element={<Projects />}/>
                </Routes>
            </BrowserRouter>
            <Analytics /> {/* fora do <Routes> */}
        </div>
    )
}

export default App

