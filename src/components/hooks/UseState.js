import {useState} from "react";
const UseState = () => {
  let [counter, setCounter] = useState(20);
  console.log(counter);
  
  //Function to increase counter
  const addValue = ()=>{
    if(counter<20){
      setCounter(counter+1);
    }
  }

  //function to decrease value
  const removeValue = ()=>{
    if(counter>0){
      setCounter(counter-1);
    }
  }
  return (
    <div style={{textAlign:"center"}}>
    <h1>HEADCOUNT: {counter}</h1>
    <button onClick={addValue} style={{fontSize: "40px", margin: "15px", borderRadius: "10px"}}>Increase: {counter}</button>
    <button onClick={removeValue} style={{fontSize: "40px", margin: "15px", borderRadius: "10px"}}>Decrease: {counter}</button>
    <br />
    <footer style={{fontSize: "20px", margin: "15px", fontSize: "20px"}}>FOOTCOUNT: {counter}</footer>
    </div>
  )
}

export default UseState;
