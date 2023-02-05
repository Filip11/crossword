import React from 'react';

export default function Row({playableTiles}){
  return(
    <div className="row">
      {[...Array(22)].map((x, i) =>
        <div className={playableTiles.includes(i) ? "playable" : ""} key={i} />
      )}
    </div>
  )
}
