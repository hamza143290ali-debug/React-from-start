import React from "react"; 
import Card from "./Card.jsx"; 
function App() {
  return (
    <>
      <h1 className="text-white font-bold text-center bg-black mt-1 ml-4 mr-4">
        HI this is me
      </h1>

      {/* card component ko 2 time imort kya*/}
      <Card username="khan" btnText="Learn new"/>
      <Card username="kaka" btnText="Learn more"/>
    </>
  );
}

export default App;


//note: 
//props ke through ham apne commponetns ko reusable hana te hain. 
//matlab aek bar component bana lya then you can use it multiple times with different data.