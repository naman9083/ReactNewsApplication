import './App.css';
import React, {useState } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
}from "react-router-dom";
// var  mode='light';


const App =() =>{
//   constructor(){
//   super();
//     // console.log("Hello! I am a xpressConstructor from news component");
//      state = {
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
const [progress,setPrg]=useState(0)
const setProgress = (progress)=>{
   setPrg(progress)
}
let pageSize=6;
let apiKey = 'e3f3a884d1144042b59bc43f7391c6b4';
    return (
      <div>
          <Router>
          <NavBar/>
          <LoadingBar color='#f11946'height={3} progress={progress} />
          <Switch>
          <Route exact path="/">< News setProgress={ setProgress} apiKey = { apiKey} key="general" pageSize={ pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business">< News setProgress={ setProgress} apiKey = { apiKey} key="business" pageSize={ pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment">< News setProgress={ setProgress} apiKey = { apiKey} key="entertainment" pageSize={ pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general">< News setProgress={ setProgress} apiKey = { apiKey} key="general" pageSize={ pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health">< News setProgress={ setProgress} apiKey = { apiKey} key="health" pageSize={ pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science">< News setProgress={ setProgress} apiKey = { apiKey} key="science" pageSize={ pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports">< News setProgress={ setProgress} apiKey = { apiKey} key="sports" pageSize={ pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology">< News setProgress={ setProgress} apiKey = { apiKey} key="technology" pageSize={ pageSize} country="in" category="technology"/></Route> 
        </Switch>
          </Router>
      </div>
    )
  }


  export default App