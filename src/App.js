import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import NewsSection from './Components/NewsSection';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export class App extends Component {
  // apiKey = process.env.REACT_APP_DIGINEWS;

  state={
    progress: 0,
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <BrowserRouter basename='/diginews'>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<NewsSection apiKey={this.apiKey} setProgress ={this.setProgress} key="general" country="in" category="general" heading="Top-headlines" />}></Route>
          <Route exact path="/business" element={<NewsSection apiKey={this.apiKey} setProgress ={this.setProgress} key="business" country="in" category="business" heading="Business" />}></Route>
          <Route exact path="/entertainment" element={<NewsSection apiKey={this.apiKey} setProgress ={this.setProgress} key="entertainment" country="in" category="entertainment" heading="Entertainment" />}></Route>
          <Route exact path="/general" element={<NewsSection apiKey={this.apiKey} setProgress ={this.setProgress} key="general" country="in" category="general" heading="General" />}></Route>
          <Route exact path="/health" element={<NewsSection apiKey={this.apiKey} setProgress ={this.setProgress} key="health" country="in" category="health" heading="Health" />}></Route>
          <Route exact path="/science" element={<NewsSection apiKey={this.apiKey} setProgress ={this.setProgress} key="science" country="in" category="science" heading="Science" />}></Route>
          <Route exact path="/sports" element={<NewsSection apiKey={this.apiKey} setProgress ={this.setProgress} key="sports" country="in" category="sports" heading="Sports" />}></Route>
          <Route exact path="/technology" element={<NewsSection apiKey={this.apiKey} setProgress ={this.setProgress} key="technology" country="in" category="technology" heading="Technology" />}></Route>
          
        </Routes>
        <LoadingBar
          height={3}
          color='white'
          progress={this.state.progress}
        />
      </BrowserRouter>
    )
  }
}

export default App