import { useState } from 'react'
import{useEffect} from 'react'


// so this is a useEffect challenge
//1: so jab be count ke value update ho so os ke sath title ke value be update hoge
//2: input maye jab be value change hoge so osko console maye be show karo 

function App() {
  const [count, setCount]=useState(0); 
  const[name, setName]=useState("")
  // for showing the value of count in a title we will use useEffect
  //har render per value update hoge
useEffect(()=>{
  document.title=`count:${count}`
},[count])

useEffect(()=>{
  console.log(name); 
},[name])


  return (
    <>
    <p>Use Effect challenge</p>
    <button onClick={()=>{setCount(count+1)}}>Click me</button>

    {/* input filed */}
    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
   
    </>
  )
}

export default App
