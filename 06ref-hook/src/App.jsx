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


// ****explanation of useRef that how it work **** 
//look to below code that how it work:

// const nameRef = useRef();
// const emailRef = useRef();

// return (
//   <>
//     <input ref={nameRef} />
//     <input ref={emailRef} />
//   </>
// );


// const inputText = useRef();

// return (
//   <input type="text" ref={inputText} />
// );
// *********** Step 1
// const inputText = useRef();

// Yahan React ek ref object banata hai.

// Shuru me ye kuch aisa hota hai:

// inputText = {
//   current: null
// }

// Abhi current ki value null hai, kyun ke input abhi page par nahi bana.

// Step 2
// <input type="text" ref={inputText} />

// Jab React is input ko screen par render karta hai, to ye automatically input ka reference inputText.current me rakh deta hai.

// Ab object kuch aisa ban jata hai:

// inputText = {
//   current: <input />
// }

// Yani current ke andar actual HTML input element aa gaya.

// Step 3

// Ab tum inputText.current ke through us input ko control kar sakte ho.

// Example:

// inputText.current.focus();

// Is se input automatically focus ho jayega.

// Ya

// console.log(inputText.current.value);

// Agar user ne likha:

// Hamza

// To console me print hoga:

// Hamza
// Is flow ko yaad rakho
// useRef()
//       │
//       ▼
// Creates an object

// {
//    current: null
// }

//       │
//       ▼

// <input ref={inputText} />

//       │
//       ▼

// React stores the input element inside .current

// {
//    current: <input />
// }

//       │
//       ▼

// Now you can use:

// inputText.current.focus()

// inputText.current.value

// inputText.current.style.color = "red"
// Sabse important concept ⭐

// ref={inputText} ka matlab ye nahi hai ke React input ki value store kar raha hai.

// Iska matlab hai:

// "React, is input element ka reference inputText.current me store kar do