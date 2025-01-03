
import React from 'react'
import  { useState, useCallback, useEffect } from "react";
import Arena from './components/arena';
function App() {
  const [count, setCount] = useState(0)
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  useEffect(() => {
  console.log("player1 changes", player1);
    return () => console.log("🗑️ App component cleanup");
  },[player1]);
  useEffect(() => {
    console.log("player2 changes", player2);
      return () => console.log("🗑️ App component cleanup");
    },[player2]);
  const handleClick = ()=> {
    // console.log("🖱️ handleClick called, current count:", count);
    setCount(prev => {
      const newCount = prev + 1;
      // console.log("⬆️ Updating count from", prev, "to", newCount);
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
