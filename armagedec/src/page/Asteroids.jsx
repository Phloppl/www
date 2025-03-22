

import {Header} from "../components/header/Header";
import {useState} from "react";

export const Asteroids =()=>{
    console.log("Parent Component rendered")
    const [counter, setCounter] = useState(0);
    return <div>
     <Header/>
    <InternalComponent counter ={counter} setCounter ={setCounter}/>
    </div>

}
const InternalComponent = (props) => {
    const {counter, setCounter} = props
    console.log("Internal Component rendered")

    return<div style={{backgroundColor: "red", hight: "200px", width: "200px"}}>
        Internal component
        {counter}
        <button onClick={()=>setCounter(counter + 1)}> Counter </button>

    </div>
}