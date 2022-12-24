import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import NewsSection from './Components/NewsSection'
import './App.css';



export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <NewsSection />
      </>
    )
  }
}

export default App
