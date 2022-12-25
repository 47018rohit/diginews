import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import NewsSection from './Components/NewsSection'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";


export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<NewsSection key="general" country="in" category="general" heading="Top-headlines"/>}></Route>
            <Route exact path="/business" element={<NewsSection key="business" country="in" category="business" heading="Business" />}></Route>
            <Route exact path="/entertainment" element={<NewsSection key="entertainment" country="in" category="entertainment" heading="Entertainment" />}></Route>
            <Route exact path="/general" element={<NewsSection key="general" country="in" category="general" heading="General" />}></Route>
            <Route exact path="/health" element={<NewsSection key="health" country="in" category="health" heading="Health" />}></Route>
            <Route exact path="/science" element={<NewsSection key="science" country="in" category="science" heading="Science" />}></Route>
            <Route exact path="/sports" element={<NewsSection key="sports" country="in" category="sports" heading="Sports" />}></Route>
            <Route exact path="/technology" element={<NewsSection key="technology" country="in" category="technology" heading="Technology" />}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}

export default App
