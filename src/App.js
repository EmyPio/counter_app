
import {useState} from "react"
import './App.css';

function App()
{
 let[num,setNum] = useState(0)
 const increment=()=>{
   setNum(num+1)

 }
 const decrement=()=>{
   
   setNum(num-1)
 }
 return (
 
  
 <div>
    <div id ="main_container">
    <h1 id="title">COUNTER</h1>
    <h1 id="number">{num}</h1>
    <div id="btn_collection">
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      
    </div>
    
  </div>
 </div>



  

);
}
 

export default App;