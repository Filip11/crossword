import React from 'react';

export default function Cell({letter, selected, x, y,  setTargetCell, setTargetCellY, direction, targetCell, targetCellY, word, selectedWord, setSelectedWord}){

  const clickHandler = () => {
    console.log(x,y)
    setTargetCell(x)
    setTargetCellY(y)
    setSelectedWord(findWordToHighlight())
  }

  const highlightWord = () => {
    // if (direction){
    //   if (y === targetCellY){
    //     return true
    //   } else {
    //     return false
    //   }
    // } else {
    //   if (x === targetCell){
    //     return true
    //   } else {
    //     return false
    //   }
    // }
    if (word.includes(selectedWord)){
      return true
    } else {
      return false
    }
  }

  const findWordToHighlight = () => {
    if (word.length === 2){
      if(direction) {
        return word[0]
      } else {
        return word[1]
      }
    } else {
      return word[0];
    }
  }
  
  return(
    <div className={highlightWord() ? "cell highlightWord" : "cell"}>
      <div className={selected ? "highlighted": ""} onClick={clickHandler}>{letter}</div>
    </div>
  )
}
