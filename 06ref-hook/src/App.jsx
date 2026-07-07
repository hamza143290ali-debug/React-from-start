import { useState,useRef } from 'react'
import './App.css'

function App() {
  const inputText=useRef(""); 
  const inputpass=useRef(""); 

  function handler(e){
     event.preventDefault(e);
    //  normal javascript ke andar agar kese element ko access karna hota to ham 
    //es tara karte te 
    // console.log(document.getElementById('inputText')); 
    // console.log(document.getElementById('inputpass'))

    //but in react ham useRef ka use karte hain 

    //2nd work: es ke andar ham woo vlaue store karte hain jo re-render nahi karte 

    console.log(inputText.current.value, inputpass.current.value); 

  
  }
  

  return (
    <>
     <form onSubmit={(handler)}>
      <input type="text" id="inputText" ref={inputText}/>
      <br/>
      <input type="password" id="inputpass" ref={inputpass}/>
      <br/>

      <button>Submit</button>
     </form>
    </>
  )
}

export default App
