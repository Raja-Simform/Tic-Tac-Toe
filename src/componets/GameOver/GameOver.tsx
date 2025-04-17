interface GameOverProps {
  winner: string;
  onRestart: () => void;
}
export default function GameOver({ winner, onRestart }: GameOverProps) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} is Winner</p>}
      {!winner && <p>It's Draw</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
