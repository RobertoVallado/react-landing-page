// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './styles/App.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-root">
      <Header />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
