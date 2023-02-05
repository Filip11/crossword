import React from 'react';
import Row from './Row';
import Cell from './Cell';

export default function Grid({letter, theGuesses, targetCell, targetCellY, setTargetCell, setTargetCellY}) {
  // const answers = ["ok", "oke", "ihihak"]
  const playables = [
    [12],
    [7, 9],
    [7, 9, 12],
    [3, 7, 9, 10, 11, 12, 13, 14, 15,16]
  ]

  return(
    <div className="grid">
      {/* {
        playables.map((playable, idx) => {
          return <Row key={idx} playableTiles={playable} />
        })
      } */}
      {/* {
        playables.map((playable, idx) => {
          return <Cell key={idx} letter={theGuesses[idx.toString()]} selected={targetCell === idx}/>
        })
      } */}
      <div className='row'>
        <div className='emptyCell' />
        <Cell x={0} y={0} letter={theGuesses["00"]} selected={targetCell === 0 && targetCellY === 0} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY}/>
        <Cell x={1} y={0} letter={theGuesses["10"]} selected={targetCell === 1 && targetCellY === 0} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY}/>
        <Cell x={2} y={0} letter={theGuesses["20"]} selected={targetCell === 2 && targetCellY === 0} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY}/>
      </div>
      <div className='row'>
        <Cell x={0} y={1} letter={theGuesses["01"]} selected={targetCell === 0 && targetCellY === 1} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY}/>
        <Cell x={1} y={1} letter={theGuesses["11"]} selected={targetCell === 1 && targetCellY === 1} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY}/>
        <Cell x={2} y={1} letter={theGuesses["21"]} selected={targetCell === 2 && targetCellY === 1} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY}/>
      </div>
      <div className='row'>
        <Cell x={0} y={2} letter={theGuesses["02"]} selected={targetCell === 0 && targetCellY === 2} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY}/>
      </div>
    </div>
  )
};
