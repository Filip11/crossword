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
  const solution = {
    "00": "h", "10": "e", "20": "r",
    "01": "h", "11": "e", "21": "r",
    "02": "h",
  }
  const [targetCell, setTargetCell] = useState(0)
  const [targetCellY, setTargetCellY] = useState(0)
  const [direction, setDirection] = useState(true)
  const [victoryModal, setVictoryModal] = useState(false)

  const handleKeyUp = ({ key } ) => {
    if (/^[A-Za-z]$/.test(key)) {
      setLetter(key)
      setTheGuesses({...theGuesses, [targetCell.toString()+targetCellY.toString()]: key})
      setTargetCell(targetCell + xModifier())
      setTargetCellY(targetCellY + yModifier()) // Set a Max limit
      console.log((targetCell).toString() + (targetCellY).toString())
    }

    if (key === 'Backspace') {
      setTheGuesses({...theGuesses, [(targetCell).toString() + (targetCellY).toString()]: undefined})
      setTargetCell(Math.max(0, targetCell-xModifier()))
      setTargetCellY(Math.max(0, targetCellY-yModifier()))
    }
  }

  const xModifier = () => {
    if (direction === true){
      return 1;
    } else {
      return 0;
    }
  }

  const yModifier = () => {
    if (direction === false){
      return 1;
    } else {
      return 0;
    }
  }

  return {letter, handleKeyUp, theGuesses, targetCell, targetCellY, setTargetCell, setTargetCellY, direction, setDirection, victoryModal, setVictoryModal, solution}
}
export default useCrossword
