import React from 'react';
import "./App.css"
import Navbar from './Components/Navbar';
import More from './Components/More';
import MoviesComponent from './Components/MoviesComponent';
import Accordiation from './Components/Accordiation';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <MoviesComponent />
      <More />
      <Accordiation />
      <Footer />
    </>
  )
}

export default App