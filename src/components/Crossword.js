import React, { useEffect } from 'react';
import useCrossword from '../hooks/useCrossword';
import Grid from './Grid';
import Modal from './Modal';

export default function Crossword() {
  const { handleKeyUp, letter, theGuesses, targetCell, targetCellY, setTargetCell, setTargetCellY, direction, setDirection, victoryModal, setVictoryModal, solution } = useCrossword()

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp, theGuesses])

  useEffect(() => {
    if (JSON.stringify(theGuesses) === JSON.stringify(solution)){
      setVictoryModal(true)
    }
  }, [theGuesses, setVictoryModal, solution])

  return(
    <div>
      {victoryModal && <Modal />}
      <Grid letter={letter} theGuesses={theGuesses} targetCell={targetCell} targetCellY={targetCellY} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} setDirection={setDirection}/>
    </div>
  )
}
