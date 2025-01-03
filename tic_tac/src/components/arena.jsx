import React, { useState, useCallback, useEffect } from "react";

function Arena({ setPlayer1, setPlayer2, count,onCellClick }) {
//   console.log("🔄 Arena component rendering");

const [cellIndex , setCellIndex] = useState(null)
 const [grid, setGrid] = useState(
     Array(9).fill({ isClickedOnce: false, isClickedTwice: false })
   );
   const handleOnClick  = (index  ,count )=>{
  setCellIndex(index)
    // 
    console.log("🖱️ Cell clicked:", index);
    onCellClick(index)

    setGrid((prev) => {
      console.log("📝 Updating grid for index:", index);
      const newGrid = [...prev];
      const currentCell = newGrid[index];
      
      if (!currentCell.isClickedOnce) {
        console.log("1️⃣ First click on cell:", index);
        newGrid[index] = {
          ...currentCell,
          isClickedOnce: true
        };
        
        
       
      } else if (!currentCell.isClickedTwice) {
        console.log("2️⃣ Second click on cell:", index);
        newGrid[index] = {
          ...currentCell,
          isClickedTwice: true
        };
      }
      
      return newGrid;
    });
   
  }
  useEffect(() => {
   
   
    console.log("📦cellIndex",cellIndex);
    if(grid && typeof cellIndex === 'number' && grid[cellIndex])
      {
        const cell = grid[cellIndex]
        console.log("📦 cell",cell);
         if (cell.isClickedOnce && !cell.isClickedTwice) {
        console.log("📊 Reacting to grid update for cell:", cellIndex);
  
        if (count % 2 === 0) {
          console.log("👤 Updating Player 1's moves");
          setPlayer1((prevMoves) => {
            const newMoves = [...prevMoves, cellIndex + 1];
            console.log("📊 New Player 1 moves:", newMoves);
            return newMoves;
          });
        } else {
          console.log("👥 Updating Player 2's moves");
          setPlayer2((prevMoves) => {
            const newMoves = [...prevMoves, cellIndex + 1];
            console.log("📊 New Player 2 moves:", newMoves);
            return newMoves;
          });
        }
      }
      }
   
  }, [grid]); // Run whenever `grid` changes
   return (
    <div className="grid grid-cols-3 gap-1 w-36 h-36">
      {grid.map((cell, index) => (
        <GridCell 
          key={index}
          cell={cell}
         onclick={() => handleOnClick(index,count)}
          index={index}
        />
      ))}
    </div>
  )
}

const GridCell = ({  index,onclick }) => {
  
    return (
      <div
       onClick={onclick}
        className="h-12 w-12 flex items-center justify-center text-white bg-amber-900"
      >
       {index}
      </div>
    );
  };
  // Then memoize it and set its display name
  const MemoizedGridCell = React.memo(GridCell);
  MemoizedGridCell.displayName = 'GridCell';
  
  // Similarly for the icons
  const SmileIcon = ({ index }) => {
    console.log(`😊 Rendering SmileIcon for cell ${index}`);
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    );
  };
  const MemoizedSmileIcon = React.memo(SmileIcon);
  MemoizedSmileIcon.displayName = 'SmileIcon';
  
  const CrossIcon = ({ index }) => {
    console.log(`❌ Rendering CrossIcon for cell ${index}`);
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    );
  };
  const MemoizedCrossIcon = React.memo(CrossIcon);
  MemoizedCrossIcon.displayName = 'CrossIcon';
  
 
  const MemoizedArena = React.memo(Arena);
  MemoizedArena.displayName = 'Arena';
  export default MemoizedArena;