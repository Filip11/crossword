import { useState } from "react";
const useCrossword = () => {
  const [letter, setLetter] = useState('')
  const [theGuesses, setTheGuesses] = useState(
    {
      "00": undefined, "10": undefined, "20": undefined,
      "01": undefined, "11": undefined, "21": undefined,
      "02": undefined,
    }
  )
  const solution = {0: "a", 1: "b", 2: "c"}
  const [targetCell, setTargetCell] = useState(0)
  const [targetCellY, setTargetCellY] = useState(0)
  const [direction, setDirection] = useState("X")

  const handleKeyUp = ({ key } ) => {
    console.log(key)

    if (/^[A-Za-z]$/.test(key)) {
      setLetter(key)
      setTheGuesses({...theGuesses, [targetCell.toString()+targetCellY.toString()]: key})
      setTargetCell(targetCell + xModifier())
      setTargetCellY(targetCellY + yModifier())
    }

    if (key === 'Backspace') {
      setTheGuesses({...theGuesses, [(targetCell).toString() + (targetCellY).toString()]: undefined})
      setTargetCell(Math.max(0, targetCell-xModifier()))
      setTargetCellY(Math.max(0, targetCellY-yModifier()))
    }
  }

  const xModifier = () => {
    if (direction === "X"){
      return 1;
    } else {
      return 0;
    }
  }

  const yModifier = () => {
    if (direction === "Y"){
      return 1;
    } else {
      return 0;
    }
  }

  return {letter, handleKeyUp, theGuesses, targetCell, targetCellY, setTargetCell, setTargetCellY}
}
export default useCrossword
