import { useState } from "react"

export default function Task1(){
    const [count, setCount] = useState(0);

    const handleIncrease = () =>{
        const updatedCount = count + 1;
        setCount(updatedCount);
    }
    const handleDecrease = () =>{
        const updatedCount = count - 1; 
        setCount(updatedCount);
    }
  
 
    return(
        <div>
           
            
            <p>Counter: {count} </p>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>

    )
}