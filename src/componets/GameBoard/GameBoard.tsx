// import { useState } from "react";
interface GameBoardProps {
  onSelectGrid: (rowIndex: number, colIndex: number) => void;
  //     activePlayerSymbol:string;
  turns: { square: { row: number; col: number }; player: "X" | "O" }[];
}
const grid = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

export default function GameBoard({ onSelectGrid, turns }: GameBoardProps) {
  // const [gameBoard,setGameBoard]=useState(grid);

  // function handleSelect(row:number,col:number){
  //     setGameBoard((GameBoard)=>
  //     {
  //         // [...GameBoard.map(inner=>[...inner])];
  //         const newBoard=structuredClone(GameBoard);
  //         newBoard[row][col]=activePlayerSymbol;
  //         return newBoard;
  //     });
  //     onSelectGrid();
  // }
//   const copiedGameBoard = grid.map((row) => [...row]);
  const copiedGameBoard=grid;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    copiedGameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {copiedGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectGrid(rowIndex, colIndex)}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
