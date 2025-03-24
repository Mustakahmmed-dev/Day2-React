import { useState } from "react";

export default function Counter(){

    const [count, setCount] = useState(0);


    const handleAddBtn = () => {
        const newCount = count + 15;
        setCount(newCount);
    }

    const counterStyle = {
        border: "2px solid blue",
    };
    return (
        <div style={counterStyle}>
            <h3>Count: {count} </h3>
            <button onClick={handleAddBtn}>Add</button>
        </div>
    )
}