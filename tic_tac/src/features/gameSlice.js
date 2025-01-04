import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    grid: Array(9).fill({ isClickedOnce: false, isClickedTwice: false }),
    player1: [],
    player2: [],
    count: 0,
  };
const gameSlice = createSlice({
    name : 'game',
    initialState,
    reducers:{
        incrementCount : (state) => {
            state.count += 1;
        },
        updateGrid: (state, action) => {
            const { index, emoji } = action.payload;
            const cell = state.grid[index];
      
            if (!cell.isClickedOnce) {
              state.grid[index] = {
                ...cell,
                isClickedOnce: true,
                emoji,
              };
            } else if (!cell.isClickedTwice) {
              state.grid[index] = {
                ...cell,
                isClickedTwice: true,
              };
            }
          },
          updatePlayerMoves: (state, action) => {
            const { player, move } = action.payload;
            if (player === 1) {
              state.player1.push(move);
            } else {
              state.player2.push(move);
            }
          },
        }
})
export const { incrementCount, updateGrid, updatePlayerMoves, } = gameSlice.actions;
export default gameSlice.reducer;