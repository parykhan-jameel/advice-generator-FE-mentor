import React from "react";
import {AdviceCard} from "./components/AdviceCard";
import { useState, useEffect } from "react";

function App() {
  const [adviceData, setAdviceData] = useState(
    null
  );
  const [buttonClick, setButtonClick] = useState(0);
  const fetchData =  async () =>{
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    console.log(data)
    setAdviceData(data);
    setButtonClick(buttonClick + 1)
  };
  

  useEffect(() => {
    if (adviceData ===  null){
      fetchData();

    }
   
    
    },[adviceData]);


  return (
    <div >
     
       <AdviceCard
         getAdvice = {() =>{
          fetchData();
         }}
        advice = {adviceData}></AdviceCard>
       
    </div>
  );
}

export default App;
