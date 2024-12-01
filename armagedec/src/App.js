import logo from './logo.svg';
import './App.css';
import {Button} from "./button/Button";

export function App (){
  return (
    <div className="App">
      <h1 className="header" style={{backgroundColor: "yellow"}}>Header Level 1</h1>
        <div> Test Div</div>
       <Button/>
    </div>
  );
}


export const test_value ="string";
export default App;
