import { useState, useEffect } from "react";
import { Die } from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    if (
      dice.every((item) => item.value === item.value) &&
      dice.every((item) => item.isHeld === true)
    ) {
      setTenzies(true);
    }
  }, [dice]);

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    };
  }
  function allNewDice() {
    const tenNewDice = [];
    for (let i = 0; i < 10; i++) {
      tenNewDice.push(generateNewDie());
    }
    return tenNewDice;
  }
  const dices = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  function handleRollClick() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }
  return (
    <main className="h-screen bg-[#0B2434] p-5">
      {tenzies && <Confetti />}
      <div className="flex h-[400px] max-w-4xl flex-col items-center justify-center rounded bg-[#F5F5F5]">
        <h1 className="m-0 text-5xl">Tenzies</h1>
        <p className="mt-0 max-w-xs text-center font-normal">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="mt-7 grid grid-cols-5 grid-rows-2 gap-4">{dices}</div>
        <button
          className="mt-9 h-9 w-24 cursor-pointer rounded bg-[#5035FF] text-white"
          onClick={handleRollClick}
        >
          {tenzies ? "New Game" : "Roll"}
        </button>
      </div>
    </main>
  );
}

export default App;
