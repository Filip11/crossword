import React from 'react';

export default function Cell({letter, selected, x, y,  setTargetCell, setTargetCellY}){

  const clickHandler = () => {
    console.log(x,y)
    setTargetCell(x)
    setTargetCellY(y)
  }
  return(
    <div className="cell">
      <div className={selected ? "highlighted": ""} onClick={clickHandler}>{letter}</div>
    </div>
  )
}
