import Die from "./Components/Die"
import { useState } from "react"

export default function App() {
  const [dice,setDice]=useState(generateAllNeWDice())
  function generateAllNeWDice(){
        return new Array(10)
            .fill(0)
            .map(()=>Math.ceil(Math.random()*6))
  }
  const diceElements=dice.map(
    num=> <Die value={num} />
  )

  function rollDice(){
    setDice(generateAllNeWDice)
  }
  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button
        className="roll-dice"
        onClick={rollDice}
      >
        Roll
      </button>
    </main>
  )
}