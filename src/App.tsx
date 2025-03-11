import { useState } from 'react';

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Privacy from "./components/pages/Privacy";
import './App.css'

function App() {

  const [section, setSection] = useState("home");

  const renderPageSection = () => {
    switch (section) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "privacy":
        return <Privacy />;
      default:
        return <Home />;
    }
  }

  return (
    <div className="app">
      <Header />
      <Navbar setSection={setSection} />
      {renderPageSection()}
      <Footer />
    </div>
  )
}

export default App
