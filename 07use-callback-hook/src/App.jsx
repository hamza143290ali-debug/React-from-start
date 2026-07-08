import { useState, useCallback } from "react";
import Component1 from './component1'

function App() {
  const [theme, setTheme] = useState("bg-white");
  const[count, setCount]=useState(0); 

  function handlerTheme() {
    setTheme(theme === "bg-white" ? "bg-black" : "bg-white");
  }

  //so jab be theme ke value change hoge page reload hoga so ye componet ke sare functions 
  //dobara re-create hoge and en ke refrences be change hoge
  console.log("parent re-render"); 
  //increment handler
const incrementhandler=useCallback(()=>{
    setCount(prev=>prev+1); 
  },[]); 
  

  return (
    <div className={`h-screen w-full ${theme}`}>
      {/* theme button */}
      <button
        className="mt-2 ml-3 px-2 py-1 border-2 bg-blue-900 text-white rounded-2xl text-sm"
        onClick={handlerTheme}
      >
        Theme Changer
      </button><br/>

      {/* Button for increment */}
      <button className="ml-4" onClick={incrementhandler} >incerment:{count}</button>

      <hr className="h-1 bg-amber-900 mt-15"/>

      <Component1 incrementhandler={incrementhandler}/>
    </div>
  );
}

export default App;