import React from 'react';
import Row from './Row';
import Cell from './Cell';

export default function Grid({letter, theGuesses, targetCell}) {
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
      {
        playables.map((playable, idx) => {
          return <Cell key={idx} letter={theGuesses[idx.toString()]} selected={targetCell === idx}/>
        })
      }
    </div>
  )
};
