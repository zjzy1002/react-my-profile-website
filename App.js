import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects"


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Projects" component={Projects} />
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;