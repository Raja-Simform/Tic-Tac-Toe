import { useState } from "react";
import "./App.css";
import Logo from "./assets/game-logo.png";
import Player from "./componets/Player/Player";
import GameBoard from "./componets/GameBoard/GameBoard";
import Log from "./componets/Log/Log";
import { WINNING_COMBINATIONS } from "./PlayerWon";
import GameOver from "./componets/GameOver/GameOver";
type GameTurn = {
  square: { row: number; col: number };
  player: "X" | "O";
};
const grid = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function deriveActivePlayer(gameTurns: GameTurn[]): "X" | "O" {
  return gameTurns.length % 2 === 0 ? "X" : "O";
}

function App() {
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  const copiedGameBoard = structuredClone(grid);
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    copiedGameBoard[row][col] = player;
  }
  let winner = "";
  for (const combination of WINNING_COMBINATIONS) {
    const first = copiedGameBoard[combination[0].row][combination[0].column];
    const second = copiedGameBoard[combination[1].row][combination[1].column];
    const third = copiedGameBoard[combination[2].row][combination[2].column];
    if (first && first === second && second === third) {
      winner = first;
    }
  }
  const draw = gameTurns.length === 9 && !winner;
  function handleSelectGrid(rowIndex: number, colIndex: number) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const newTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return newTurns;
    });
  }
  function handleRestart() {
    setGameTurns([]);
  }
  return (
    <main>
      <img src={Logo} alt="Logo" id="imageLogo" />
      <h1>Tic-Tac-Toe</h1>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player-->1"
            symbol="O"
            isActive={activePlayer === "X"}
          />
          <Player
            name="Player-->2"
            symbol="X"
            isActive={activePlayer === "O"}
          />
        </ol>
        {(winner || draw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectGrid={handleSelectGrid} board={copiedGameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
