import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Comic from "./components/Comic/index";
import "./App.css"

function App() {
  return (
    <>
      <Header/>
      {/* <MintButton className="mint"/> */}
      <Comic/>
      <Footer/>
    </>
    
  );
}

export default App;
