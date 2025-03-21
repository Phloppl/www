

import {Header} from "../components/header/Header";

export const Asteroids =()=>{
return <div>
     <Header/>
    <InternalComponent/>



</div>

}
const InternalComponent = ()=>{
    console.log("Internal Component rendered")
    return<div style={{backgroundColor: "red", hight: "200px", width: "200px"}}>
        Internal component
    </div>
}