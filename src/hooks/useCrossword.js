import { useState } from "react";
const useCrossword = () => {
  const [letter, setLetter] = useState('')
  const [theGuesses, setTheGuesses] = useState(
    {
      "120": undefined,
      "71": undefined, "91": undefined, "121": undefined,
      "72": undefined, "92": undefined, "122": undefined,
      "33": undefined, "73": undefined, "93": undefined, "103": undefined, "113": undefined, "123": undefined, "133": undefined, "143": undefined, "153": undefined, "163": undefined,
      "34": undefined, "74": undefined, "94": undefined, "124": undefined,
      "25": undefined, "35": undefined, "45": undefined, "55": undefined, "65": undefined, "75": undefined, "95": undefined, "125": undefined,
      "36": undefined, "76": undefined, "86": undefined, "96": undefined, "106": undefined, "116": undefined, "126": undefined, "136": undefined,
      "37": undefined, "77": undefined, "97": undefined, "137": undefined,
      "38": undefined, "118": undefined, "138": undefined,
      "09": undefined, "19": undefined, "29": undefined, "39": undefined, "49": undefined, "109": undefined, "119": undefined, "129": undefined, "139": undefined, "149": undefined, "169": undefined,
      "310": undefined, "1110": undefined, "1310": undefined, "1610": undefined,
      "1111": undefined, "1311": undefined, "1411": undefined, "1511": undefined, "1611": undefined,
      "912": undefined, "1012": undefined, "1112": undefined, "1212": undefined, "1612": undefined,
      "1113": undefined, "1613": undefined,
      "1214": undefined, "1314": undefined, "1414": undefined, "1514": undefined, "1614": undefined, "1714": undefined,
      "1615": undefined,
      "1616": undefined,
      "1617": undefined,
    }
  )
  const solution = {
    "120": "a",
    "71": "s", "91": "s", "121": "l",
    "72": "u", "92": "i", "122": "o",
    "33": "p", "73": "n", "93": "s", "103": "i", "113": "d", "123": "e", "133": "d", "143": "o", "153": "o", "163": "r",
    "34": "o", "74": "s", "94": "t", "124": "t",
    "25": "p", "35": "l", "45": "u", "55": "n", "65": "g", "75": "e", "95": "e", "125": "t",
    "36": "o", "76": "t", "86": "u", "96": "r", "106": "t", "116": "l", "126": "e", "136": "s",
    "37": "r", "77": "s", "97": "s", "137": "w",
    "38": "o", "118": "e", "138": "i",
    "09": "k", "19": "e", "29": "v", "39": "i", "49": "n", "109": "m", "119": "i", "129": "a", "139": "t", "149": "a", "169": "b",
    "310": "d", "1110": "f", "1310": "c", "1610": "l",
    "1111": "f", "1311": "h", "1411": "a", "1511": "n", "1611": "a",
    "912": "j", "1012": "e", "1112": "e", "1212": "p", "1612": "c",
    "1113": "l", "1613": "k",
    "1214": "c", "1314": "h", "1414": "e", "1514": "e", "1614": "s", "1714": "e",
    "1615": "a",
    "1616": "n",
    "1617": "d",
  }
  const [targetCell, setTargetCell] = useState(0)
  const [targetCellY, setTargetCellY] = useState(0)
  const [direction, setDirection] = useState(false)
  const [victoryModal, setVictoryModal] = useState(false)
  const [selectedWord, setSelectedWord] = useState(1)

  const handleKeyUp = ({ key } ) => {
    if (/^[A-Za-z]$/.test(key)) {
      setLetter(key)
      if((targetCell.toString()+targetCellY.toString() in solution)){
        setTheGuesses({...theGuesses, [targetCell.toString()+targetCellY.toString()]: key})
      } else {
        console.log("pussy")
      }
      setTargetCell(targetCell + xModifier())
      setTargetCellY(targetCellY + yModifier()) // Set a Max limit
      console.log((targetCell).toString() + (targetCellY).toString())
    }

    if (key === 'Backspace') {
      setTheGuesses({...theGuesses, [(targetCell).toString() + (targetCellY).toString()]: undefined})
      setTargetCell(Math.max(0, targetCell-xModifier()))
      setTargetCellY(Math.max(0, targetCellY-yModifier()))
    }

    if (key === "ArrowRight"){
      setTargetCell(Math.min(17, targetCell+1))
      setDirection(true)
    }

    if (key === "ArrowLeft"){
      setTargetCell(Math.max(0, targetCell-1))
      setDirection(true)
    }

    if (key === "ArrowDown"){
      setTargetCellY(Math.min(17, targetCellY+1))
      setDirection(false)
    }

    if (key === "ArrowUp"){
      setTargetCellY(Math.max(0, targetCellY-1))
      setDirection(false)
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

  return {letter, handleKeyUp, theGuesses, targetCell, targetCellY, setTargetCell, setTargetCellY, direction, setDirection, victoryModal, setVictoryModal, solution, selectedWord, setSelectedWord}
}
export default useCrossword
