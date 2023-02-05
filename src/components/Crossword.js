import React, { useEffect } from 'react';
import useCrossword from '../hooks/useCrossword';
import Grid from './Grid';

export default function Crossword() {
  const { handleKeyUp, letter, theGuesses, targetCell, targetCellY, setTargetCell, setTargetCellY } = useCrossword()

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp, theGuesses])

  return(
    <div>
      <div>Crossword</div>
      <Grid letter={letter} theGuesses={theGuesses} targetCell={targetCell} targetCellY={targetCellY} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY}/>
    </div>
  )
}
