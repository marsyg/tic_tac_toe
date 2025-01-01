import React from "react";

function Arena() {
  // Define a 3x3 grid with alternating colors
  const grid = Array(9).fill(null);

  return (
    <div className="grid grid-cols-3 gap-1">
      {grid.map((_, index) => (
        <div
          key={index}
          className={`h-12 w-12 flex items-center justify-center text-white ${
            (Math.floor(index / 3) + index) % 2 === 0 ? "bg-amber-900" : "bg-gray-500"
          }`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}

export default Arena;
