import './App.css';
import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
}from "react-router-dom";
// var  mode='light';
export default class App extends Component {
//   constructor(){
//   super();
//     // console.log("Hello! I am a xpressConstructor from news component");
//     this.state = {
//            mode:'light', 
           
//     }
//   }
// toggleMode(mode){
//     if(mode==='light'){
//           mode='dark';
//           document.body.style.backgroundColor='#042743';
//         }
  
//     else {
//           mode='light';
//           document.body.style.backgroundColor='white';
//           }
//   }
state = {
  progress:0,
}
setProgress = (progress)=>{
  this.setState({progress:progress})
}
  pageSize=6;
  apiKey = 'e3f3a884d1144042b59bc43f7391c6b4';
 
  render() {
    return (
      <div>
          <Router>
          <NavBar/>
          <LoadingBar color='#f11946'height={3} progress={this.state.progress} />
          <Switch>
          <Route exact path="/">< News setProgress={this.setProgress} apiKey = {this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business">< News setProgress={this.setProgress} apiKey = {this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment">< News setProgress={this.setProgress} apiKey = {this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general">< News setProgress={this.setProgress} apiKey = {this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health">< News setProgress={this.setProgress} apiKey = {this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science">< News setProgress={this.setProgress} apiKey = {this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports">< News setProgress={this.setProgress} apiKey = {this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology">< News setProgress={this.setProgress} apiKey = {this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/></Route> 
        </Switch>
          </Router>
      </div>
    )
  }
}
