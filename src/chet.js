//import ReactDOM from 'react-dom'
import React from 'react'
var firebase = require('firebase');

 var config = {
    apiKey: "AIzaSyA-gnKwYPoGKZFYbUvX6UQ1XBhuqg_d8XE",
    authDomain: "chatapp-3b09c.firebaseapp.com",
    databaseURL: "https://chatapp-3b09c.firebaseio.com",
    storageBucket: "chatapp-3b09c.appspot.com",
    messagingSenderId: "191850275096",
  };
  firebase.initializeApp(config);
  
class ChatingRoom extends React.Component{
constructor(props,context){
    super(props,context)
    this.updatesMessages = this.updatesMessages.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
   // this.updateNames = this.updateNames.bind(this)
    this.state={
        message:'',
        messages:[],  
    }
}
componentDidMount(){
        console.log("componentDidMount")
        firebase.database().ref('messeges/').on('value',(snapshot)=>{
            const currentMessege = snapshot.val()
            if(currentMessege !=null){
                this.setState({
                    messeges : currentMessege
                })
            }
        })  
    }
updatesMessages(event){
    console.log('updatesMessages'+ event.target.value)
    this.setState({
        message:event.target.value
    })
}

submitMessage(event){
        const nextMessage = {
      id: this.state.messages.length,
      text:this.state.message
  }
 firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
  var list = Object.assign([],this.state.messages)
    list.push(nextMessage)
    this.setState({
        messages:list
    })
    }
render(){
    const currentMessages = this.state.messages.map((message,I)=>{
return(
    <li key={message.id}>{message.text}</li>

)
})
    return(
        <div id='elemnt'>
        <input className='one' onChange={this.updatesMessages} type='text' required='required' placeholder='Enter message'/>  
        <br />
        <button onClick={this.submitMessage} >Enter message</button>
        <ol className='msg'> 
        {currentMessages}
        </ol>
        </div>
    )
}}
export default ChatingRoom


