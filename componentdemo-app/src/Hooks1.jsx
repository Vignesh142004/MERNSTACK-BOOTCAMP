import React,{ useState } from "react";
const Demo1=()=>{
    const[theme,setTheme]=useState("light");
    const toggletheme=()=>{
        setTheme(theme ==="light"?"dark":"light");
    }
    return(
        <div>
        <div className="App"/>
        <div style={{backgroundColor:theme==="light"?"#FFFF":"#0C12CA"}}>Coder Siva</div>
        <button onClick={toggletheme}>ToggleTheme</button>
        {theme}
        </div>
    )
}
export default Demo1;