import "./Player.css";
import { useState } from "react";
interface Props {
  name: string;
  symbol: string;
  isActive: boolean;
}
export default function Player({ name, symbol, isActive }: Props) {
  const [edit, setEdit] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  function handleClick() {
    setEdit((edit) => !edit);
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event);
    if (event) {
      setPlayerName(event.target.value);
    }
  }
  let inputName = <span className="player-name">{playerName}</span>;
  if (edit) {
    inputName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {inputName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button id="edit-btn" onClick={handleClick}>
        {edit ? "Save" : "Edit"}
      </button>
    </li>
  );
}
