//import firebase from 'firebase'
//import 'firebase/database'
import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import ChatingRoom from './chet.js'
import './index.css'




class Chatingapp extends React.Component{
render(){
return(
  <div className="main">
  <img src='https://udemy-images.udemy.com/course/750x422/476332_e67e_4.jpg' height='300px'width='100%'/>    
 
  <h1>lets Chat...</h1>
  <ChatingRoom/>
  </div>
)
}
}
ReactDOM.render(
  <Chatingapp />,
  document.getElementById('root')
)
