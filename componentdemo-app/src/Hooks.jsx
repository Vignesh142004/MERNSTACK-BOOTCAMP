import { useState } from "react";

const Demo=()=>{
    const[count,setCount]=useState(0);
    const increment=()=>
    {
        setCount(count+5);
    }
    const decrement=()=>
    {
        setCount(count-5);
    }
    return(
        <div>
            <p>This Counter is implemented using Hooks in React.</p>
            <button  onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            {count}
            <br/>
        </div>
    )
}

export default Demo;
   