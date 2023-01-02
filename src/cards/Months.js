import { createUnarySpacing } from '@mui/system'
import React, { useState } from 'react'
import './cards.css'
export const Months = ({month}) => {
  function getRandomNumber(min, max) {
    const val  = Math.floor(Math.random() * 200 + min);
    console.log('random number = ' + val);
    return val;
  }
  const[inputval,setInputval] = useState(0);
  
  const handleChange = (e) =>{
    console.log(e.target.value);
      setInputval(e.target.value);
  }
  const handleCalculate = (e) =>{
   
    
    setInputval(getRandomNumber(inputval-100,inputval+100));
   
  }
  const handleReset = () =>{
    setInputval(0);
  }
    
  return (
 
  

  <div style={{
    display : "flex",
    boxShadow : '0px 1px 8px rgb(128,128,128)',
    padding : '5px'

    
  }}>
         <input onChange={handleChange}  value = {inputval} type = 'number' style ={{
    padding : "10px",
    margin : "5px"
    ,flex  :'8'
  }} name={month} />
  <div style={{
    display :"fex",
    flexDirection :'column',
    flex : '3'
  }}>
   <button onClick={handleReset} style={ {
     margin :'0px 0px auto auto ',
     border :'2px solid green'
     ,borderRadius :'0.4rem'
     ,float :'right'
}} >Reset</button>
<button onClick={handleCalculate}  style={{height : '35px' ,margin : 'auto',borderRadius : '0.4rem'}}>Calculate </button>
    
  </div>
 

  </div>
 
  
  )
}
