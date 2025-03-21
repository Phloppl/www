

import {Header} from "../components/header/Header";
import {useState} from "react";

export const Asteroids =()=>{
    console.log("Parent Component rendered")
return <div>
     <Header/>
    <InternalComponent/>



</div>

}
const InternalComponent = ()=>{
    console.log("Internal Component rendered")
    const [counter, setCounter] = useState(0);
    return<div style={{backgroundColor: "red", hight: "200px", width: "200px"}}>
        Internal component
        {counter}
        <button onClick={()=> setCounter(counter + 1)}>Counter</button>
    </div>
}