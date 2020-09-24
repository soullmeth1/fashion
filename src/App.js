import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Nav from "./components/Nav";
import TodayBest from "./components/TodayBest";

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav />

      {/* Header */}
      <Header />

      {/* Explore */}
      <Collection />

      {/* Gallery */}
      <Gallery />

      {/* Best Seller */}
      <TodayBest />

      {/* Banner */}
      <Banner />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
