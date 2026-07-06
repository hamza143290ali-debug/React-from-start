
import {useState} from 'react' 
function App() {
const [color, setColor] =useState("bg-black"); 

  return (
   <div className={`h-screen w-full justify-center ${color} display-flex items-center`}>

<div className="flex justify-center bg-white w-full h-20 items-center fixed bottom-15 ml-2 mr-2">

<button className="bg-green-500 text-white px-4 py-2 rounded-md mr-3" onClick={() => setColor("bg-green-500")}>Green</button>
<button className="bg-red-500 text-white px-4 py-2 rounded-md mr-3" onClick={() => setColor("bg-red-500")}>Red</button>
<button className="bg-black text-white px-4 py-2 rounded-md mr-3" onClick={() => setColor("bg-black")}>Black</button>
<button className="bg-white border-1 text-black px-4 py-2 rounded-md mr-3" onClick={() => setColor("bg-white")}>White</button>
<button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-3" onClick={() => setColor("bg-blue-500")}>Blue</button>
<button className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-3" onClick={() => setColor("bg-yellow-500")}>Yellow</button>
</div>

   </div>
  )
}

export default App
