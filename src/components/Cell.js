import React from 'react';

export default function Cell({letter, selected}){

  return(
    <div className="cell">
      <div className={selected ? "highlighted": ""}>{letter}</div>
    </div>
  )
}
