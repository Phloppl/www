//import {Header} from ""


import {useParams, useRoutes} from "react-router-dom";

export const Asteroid =()=>{
    const {id} = useParams();
return <div>
 <div>
     {`Asteroid ID Page: ${id}`}
 </div>
</div>
}