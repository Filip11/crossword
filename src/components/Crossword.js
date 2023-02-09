import React, { useEffect } from 'react';
import useCrossword from '../hooks/useCrossword';
import Grid from './Grid';
import Modal from './Modal';
import Clues from './Clues';

export default function Crossword() {
  const { handleKeyUp, letter, theGuesses, targetCell, targetCellY, setTargetCell, setTargetCellY, direction, setDirection, victoryModal, setVictoryModal, solution, selectedWord, setSelectedWord } = useCrossword()

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp, theGuesses])

  useEffect(() => {
    console.log("guess")
    console.log(theGuesses)
    console.log("sol")
    console.log(solution)
    if (JSON.stringify(theGuesses) === JSON.stringify(solution)){
      setVictoryModal(true)
    }
  }, [theGuesses, setVictoryModal, solution])

  return(
    <div className='gameRow'>
      {victoryModal && <Modal />}
      <div className="column">
        <Grid letter={letter} theGuesses={theGuesses} targetCell={targetCell} targetCellY={targetCellY} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} setDirection={setDirection} selectedWord={selectedWord} setSelectedWord={setSelectedWord}/>
      </div>
      <div className='column'>
        <Clues />
      </div>
    </div>
  )
}
