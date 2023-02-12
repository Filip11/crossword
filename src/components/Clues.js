import React from 'react';

export default function Clues({selectedWord, setSelectedWord, setTargetCell, setTargetCellY}){

  const handling = (newWord, newX, newY) => {
    console.log("click")
    // setSelectedWord(newWord)
    // setTargetCell(newX)
    // setTargetCellY(newY)
  }

  return(
    <div>
      <h2 style={{fontFamily: 'Apple Chancery'}}>Clues</h2>
      <div className='gameRow'>
        <div className='column'>
          <h2 style={{fontFamily: 'Apple Chancery'}}>Across</h2>
          <div>
            <div style={{display: "flex"}} className={5 === selectedWord ? "highlightWord" : ""}>
              <p><b>5 </b> Our first date night</p>
            </div>
            <div style={{display: "flex"}} className={6 === selectedWord ? "highlightWord" : ""}>
              <p><b>6 </b> Othership venture</p>
            </div>
            <div style={{display: "flex"}} className={7 === selectedWord ? "highlightWord" : ""}>
              <p><b>7 </b> Big Hawaii friends</p>
            </div>
            <div style={{display: "flex"}} className={10 === selectedWord ? "highlightWord" : ""}>
              <p><b>10 </b> AirBnB host in Maui</p>
            </div>
            <div style={{display: "flex"}} className={11 === selectedWord ? "highlightWord" : ""}>
              <p><b>11 </b> Sporty convertible</p>
            </div>
            <div style={{display: "flex"}} className={13 === selectedWord ? "highlightWord" : ""}>
              <p><b>13 </b> A treacherous road leads here</p>
            </div>
            <div style={{display: "flex"}} className={14 === selectedWord ? "highlightWord" : ""}>
              <p><b>14 </b> Make of the car that took us through the Alps</p>
            </div>
            <div style={{display: "flex"}} className={15 === selectedWord ? "highlightWord" : ""}>
              <p><b>15 </b> Strawberries filling I made us for our first Valentines</p>
            </div>
          </div>
        </div>
        <div className='column'>
          <h2 style={{fontFamily: 'Apple Chancery'}}>Down</h2>
          <div style={{display: "flex"}} className={1 === selectedWord ? "highlightWord" : ""}>
            <p><b>1 </b> Home of the best slice of meringue</p>
          </div>
          <div style={{display: "flex"}} className={2 === selectedWord ? "highlightWord" : ""}>
            <p><b>2 </b>The most photographed thing in Hawaii</p>
          </div>
          <div style={{display: "flex"}} className={3 === selectedWord ? "highlightWord" : ""}>
            <p><b>3 </b>There's three of them in Canmore</p>
          </div>
          <div style={{display: "flex"}} className={4 === selectedWord ? "highlightWord" : ""}>
            <p><b>4 </b>Used to take a spicy pic</p>
          </div>
          <div style={{display: "flex"}} className={8 === selectedWord ? "highlightWord" : ""}>
            <p><b>8 </b>Zelda, Pokémon, Overcooked</p>
          </div>
          <div style={{display: "flex"}} className={9 === selectedWord ? "highlightWord" : ""}>
            <p><b>9 </b>Head over heels in love?</p>
          </div>
          <div style={{display: "flex"}} className={12 === selectedWord ? "highlightWord" : ""}>
            <p><b>12 </b>Early morning Maui beach</p>
          </div>
        </div>
      </div>
    </div>
  )
}
