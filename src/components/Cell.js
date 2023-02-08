import React from 'react';

export default function Cell({letter, selected, x, y,  setTargetCell, setTargetCellY, direction, targetCell, targetCellY}){

  const clickHandler = () => {
    console.log(x,y)
    setTargetCell(x)
    setTargetCellY(y)
  }

  const highlightWord = () => {
    if (direction){
      if (y === targetCellY){
        return true
      } else {
        return false
      }
    } else {
      if (x === targetCell){
        return true
      } else {
        return false
      }
    }
  }
  
  return(
    <div className={highlightWord() ? "cell highlightWord" : "cell"}>
      <div className={selected ? "highlighted": ""} onClick={clickHandler}>{letter}</div>
    </div>
  )
}
