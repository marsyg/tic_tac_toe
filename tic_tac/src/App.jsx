
import React from 'react'
import  { useState, useCallback, useEffect } from "react";
import Arena from './components/arena';
function App() {
  const [count, setCount] = useState(0)
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
 
  useEffect(() => {
    console.log("🔄 useEffect from winning logic ");
    if(count >= 3){
      console.log("count",count);
      if(checkWinners(player1, 1) && player1.length >= 3){

       alert("🏆 Player 1 wins");
       }else if(checkWinners(player2, 1)&&player2.length >= 3){
         alert("🏆 Player 2 wins");
       }
  
}}, [player1, player2]);


  

  const checkWinners = useCallback((array, num) => {
    if(check1(array,num ,1,3)){
      return true;
    }else if(check1(array,num ,3,1)){
      return true;}
    else if(check2(array,num ,2,2)){return true;}
    return false;
  }, []);

  const checkSubsequence = (array,startIndex, target1, target2) => {
    let found1 = false, found2 = false;
    for (let j = startIndex; j < array.length; j++) {
      if (array[j] === target1) found1 = true;
      if (array[j] === target2) found2 = true;
    }
    return found1 && found2;
  };
  const check2 = useCallback((array, num, diff1, diff2) => {
    const value = 1;
    
    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {
      if (array[i] === value && checkSubsequence(array,i + 1, value + 2*diff1, value + 2*2*diff1)) {
        return true;
      } else if (array[i] === value + diff2 && checkSubsequence(array,i + 1, value + diff2 + diff1, value + diff2 + 2*diff1)) {
        return true;
      }
    }
    return false;
  }, []);

  const check1 = useCallback((array, num, diff1, diff2) => {
    const value = 1;
    
    
    array.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value && checkSubsequence(array,i + 1, value + diff1, value + 2*diff1)) {
        return true;
      } else if (array[i] === value + diff2 && checkSubsequence(array,i + 1, value + diff2 + diff1, value + diff2 + 2*diff1)) {
        return true;
      } else if (array[i] === value + 2*diff2 && checkSubsequence(array,i + 1, value + 2*diff2 + diff1, value + 2*diff2 + 2*diff1)) {
        return true;
      }
    }
    return false;
  }, []);

  useEffect(() => {
  console.log("player1 changes", player1);
    return () => console.log("🗑️ App component cleanup");
  },[player1]);

  useEffect(() => {
    console.log("player2 changes", player2);
      return () => console.log("🗑️ App component cleanup");
    },[player2]);

  const handleClick = ()=> {
    setCount(prev => {
      const newCount = prev + 1;
      return newCount;
    });
  };
  return (
    <>
    <div className="h-screen w-full flex justify-center items-center">
    <Arena 
     onCellClick={handleClick}
     setPlayer1={setPlayer1}
     setPlayer2={setPlayer2}
     count={count}
      />
    </div>
   
    </>
  )
}

export default App
