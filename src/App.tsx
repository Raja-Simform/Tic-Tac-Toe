import { useState } from "react";
import "./App.css";
import Logo from "./assets/game-logo.png";
import Player from "./componets/Player/Player";
import GameBoard from "./componets/GameBoard/GameBoard";
import Log from "./componets/Log/Log";
type GameTurn={
  square:{row:number,col:number};
  player:"X"|"O";
}
function App() {
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);
  const [activePlayer, setActivePlayer] = useState<"X"|"O">("X");

  function handleSelectGrid(rowIndex: number, colIndex: number) {
    setGameTurns((prevTurns) => {
      // let currentPlayer = "X";
      // if (gameTurns.length > 0 && gameTurns[0].player === "X") {
      //   currentPlayer = "O";
      // }

      const newTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];
      return newTurns;
    });
    setActivePlayer((activePlayer) => (activePlayer === "X" ? "O" : "X"));
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
        <GameBoard onSelectGrid={handleSelectGrid} turns={gameTurns} />
      </div>
      <Log />
    </main>
  );
}

export default App;
