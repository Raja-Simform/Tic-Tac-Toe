type GameTurn = {
  square: { row: number; col: number };
  player: "X" | "O";
};
interface PropsType {
  turns: GameTurn[];
}
export default function Log({ turns }: PropsType) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}
