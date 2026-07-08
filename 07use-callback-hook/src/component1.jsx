import React from "react";

const Component1 = React.memo(({ incrementhandler }) => {
  console.log("Child Render");

  return (
    <div>
      <button
        onClick={incrementhandler}
        className="ml-4 mt-5 bg-yellow-300 px-4 py-1 rounded-2xl"
      >
        Click
      </button>
    </div>
  );
});

export default Component1;

//React.memo hmare component ko wrap karta hain and child component ko re-render hone se prevent karta hian
//but agar hamne props maye koye function pass karna ho to then hamee os function ko freez karna hoga through call back 
//take jab parent re-render ho jaye to child re-render na ho. and os function ke refrence change na ho


//remeber:
//jab app component re-render hota hain to oske sare functions dobara create hote hain. means ke refrence change ho jate hain
//so componetn ko jab refrence melta hian to oo be change ho jata hian. so then component be re-render karta hain