import { useState } from "react";
const useCrossword = () => {
  const [letter, setLetter] = useState('')
  const [theGuesses, setTheGuesses] = useState({0: undefined, 1: undefined, 2: undefined})
  const solution = {0: "a", 1: "b", 2: "c"}
  const [targetCell, setTargetCell] = useState(0)

  const handleKeyUp = ({ key } ) => {
    console.log(key)
    if (/^[A-Za-z]$/.test(key)) {
      setLetter(key)
      setTheGuesses({...theGuesses, [targetCell]: key})
      setTargetCell(targetCell+1)
    }

    if (key === 'Backspace') {
      setTheGuesses({...theGuesses, [targetCell-1]: undefined})
      setTargetCell(Math.max(0, targetCell-1))
    }
  }

  return {letter, handleKeyUp, theGuesses, targetCell}
}
export default useCrossword
