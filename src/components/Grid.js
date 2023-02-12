import React from 'react';
import Cell from './Cell';

export default function Grid({theGuesses, targetCell, targetCellY, setTargetCell, setTargetCellY, direction, setDirection, selectedWord, setSelectedWord}) {

  const clickHandler = () => {
    setDirection(!direction)
  }

  return(
    <div className="grid">
      <div className='row' onClick={clickHandler}>
        {
          [...Array(12).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
        <Cell x={12} y={0} letter={theGuesses["120"]} selected={targetCell === 12 && targetCellY === 0} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[1]} setSelectedWord={setSelectedWord} />
        {
          [...Array(5).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
      </div>
      <div className='row' onClick={clickHandler}>
        {
          [...Array(7).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
        <Cell x={7} y={1} letter={theGuesses["71"]} selected={targetCell === 7 && targetCellY === 1} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[2]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <Cell x={9} y={1} letter={theGuesses["91"]} selected={targetCell === 9 && targetCellY === 1} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[3]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <Cell x={12} y={1} letter={theGuesses["121"]} selected={targetCell === 12 && targetCellY === 1} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[1]} setSelectedWord={setSelectedWord} />
        {
          [...Array(5).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
      </div>
      <div className='row' onClick={clickHandler}>
        {
          [...Array(7).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
        <Cell x={7} y={2} letter={theGuesses["72"]} selected={targetCell === 7 && targetCellY === 2} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[2]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <Cell x={9} y={2} letter={theGuesses["92"]} selected={targetCell === 9 && targetCellY === 2} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[3]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <Cell x={12} y={2} letter={theGuesses["122"]} selected={targetCell === 12 && targetCellY === 2} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[1]} setSelectedWord={setSelectedWord} />
        {
          [...Array(5).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
      </div>
      <div className='row' onClick={clickHandler}>
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <Cell x={3} y={3} letter={theGuesses["33"]} selected={targetCell === 3 && targetCellY === 3} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[4]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <Cell x={7} y={3} letter={theGuesses["73"]} selected={targetCell === 7 && targetCellY === 3} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[2]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <Cell x={9} y={3} letter={theGuesses["93"]} selected={targetCell === 9 && targetCellY === 3} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[3, 5]} setSelectedWord={setSelectedWord} />
        <Cell x={10} y={3} letter={theGuesses["103"]} selected={targetCell === 10 && targetCellY === 3} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[5]} setSelectedWord={setSelectedWord} />
        <Cell x={11} y={3} letter={theGuesses["113"]} selected={targetCell === 11 && targetCellY === 3} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[5]} setSelectedWord={setSelectedWord} />
        <Cell x={12} y={3} letter={theGuesses["123"]} selected={targetCell === 12 && targetCellY === 3} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[1, 5]} setSelectedWord={setSelectedWord} />
        <Cell x={13} y={3} letter={theGuesses["133"]} selected={targetCell === 13 && targetCellY === 3} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[5]} setSelectedWord={setSelectedWord} />
        <Cell x={14} y={3} letter={theGuesses["143"]} selected={targetCell === 14 && targetCellY === 3} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[5]} setSelectedWord={setSelectedWord} />
        <Cell x={15} y={3} letter={theGuesses["153"]} selected={targetCell === 15 && targetCellY === 3} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[5]} setSelectedWord={setSelectedWord} />
        <Cell x={16} y={3} letter={theGuesses["163"]} selected={targetCell === 16 && targetCellY === 3} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[5]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
      </div>
      <div className='row' onClick={clickHandler}>
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <Cell x={3} y={4} letter={theGuesses["34"]} selected={targetCell === 3 && targetCellY === 4} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[4]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <Cell x={7} y={4} letter={theGuesses["74"]} selected={targetCell === 7 && targetCellY === 4} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[2]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <Cell x={9} y={4} letter={theGuesses["94"]} selected={targetCell === 9 && targetCellY === 4} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[3]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <Cell x={12} y={4} letter={theGuesses["124"]} selected={targetCell === 12 && targetCellY === 4} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[1]} setSelectedWord={setSelectedWord} />
        {
          [...Array(5).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
      </div>
      <div className='row' onClick={clickHandler}>
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <Cell x={2} y={5} letter={theGuesses["25"]} selected={targetCell === 2 && targetCellY === 5} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[6]} setSelectedWord={setSelectedWord} />
        <Cell x={3} y={5} letter={theGuesses["35"]} selected={targetCell === 3 && targetCellY === 5} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[4, 6]} setSelectedWord={setSelectedWord} />
        <Cell x={4} y={5} letter={theGuesses["45"]} selected={targetCell === 4 && targetCellY === 5} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[6]} setSelectedWord={setSelectedWord} />
        <Cell x={5} y={5} letter={theGuesses["55"]} selected={targetCell === 5 && targetCellY === 5} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[6]} setSelectedWord={setSelectedWord} />
        <Cell x={6} y={5} letter={theGuesses["65"]} selected={targetCell === 6 && targetCellY === 5} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[6]} setSelectedWord={setSelectedWord} />
        <Cell x={7} y={5} letter={theGuesses["75"]} selected={targetCell === 7 && targetCellY === 5} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[2, 6]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <Cell x={9} y={5} letter={theGuesses["95"]} selected={targetCell === 9 && targetCellY === 5} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[3]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <Cell x={12} y={5} letter={theGuesses["125"]} selected={targetCell === 12 && targetCellY === 5} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[1]} setSelectedWord={setSelectedWord} />
        {
          [...Array(5).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
      </div>
      <div className='row' onClick={clickHandler}>
        {
          [...Array(3).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
        <Cell x={3} y={6} letter={theGuesses["36"]} selected={targetCell === 3 && targetCellY === 6} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[4]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <div className='emptyCell'/>        
        <Cell x={7} y={6} letter={theGuesses["76"]} selected={targetCell === 7 && targetCellY === 6} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[2, 7]} setSelectedWord={setSelectedWord} />
        <Cell x={8} y={6} letter={theGuesses["86"]} selected={targetCell === 8 && targetCellY === 6} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[7]} setSelectedWord={setSelectedWord} />
        <Cell x={9} y={6} letter={theGuesses["96"]} selected={targetCell === 9 && targetCellY === 6} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[3, 7]} setSelectedWord={setSelectedWord} />
        <Cell x={10} y={6} letter={theGuesses["106"]} selected={targetCell === 10 && targetCellY === 6} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[7]} setSelectedWord={setSelectedWord} />
        <Cell x={11} y={6} letter={theGuesses["116"]} selected={targetCell === 11 && targetCellY === 6} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[7]} setSelectedWord={setSelectedWord} />
        <Cell x={12} y={6} letter={theGuesses["126"]} selected={targetCell === 12 && targetCellY === 6} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[1, 7]} setSelectedWord={setSelectedWord} />
        <Cell x={13} y={6} letter={theGuesses["136"]} selected={targetCell === 13 && targetCellY === 6} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[8, 7]} setSelectedWord={setSelectedWord} />        
        {
          [...Array(4).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
      </div>
      <div className='row' onClick={clickHandler}>
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <div className='emptyCell'/>  
        <Cell x={3} y={7} letter={theGuesses["37"]} selected={targetCell === 3 && targetCellY === 7} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[4]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <div className='emptyCell'/>  
        <Cell x={7} y={7} letter={theGuesses["77"]} selected={targetCell === 7 && targetCellY === 7} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[2]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <Cell x={9} y={7} letter={theGuesses["97"]} selected={targetCell === 9 && targetCellY === 7} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[3]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <Cell x={13} y={7} letter={theGuesses["137"]} selected={targetCell === 13 && targetCellY === 7} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[8]} setSelectedWord={setSelectedWord} />
        {
          [...Array(4).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
      </div>
      <div className='row' onClick={clickHandler}>
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <div className='emptyCell'/>  
        <Cell x={3} y={8} letter={theGuesses["38"]} selected={targetCell === 3 && targetCellY === 8} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[4]} setSelectedWord={setSelectedWord} />
        {
          [...Array(7).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
        <Cell x={11} y={8} letter={theGuesses["118"]} selected={targetCell === 11 && targetCellY === 8} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[9]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <Cell x={13} y={8} letter={theGuesses["138"]} selected={targetCell === 13 && targetCellY === 8} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[8]} setSelectedWord={setSelectedWord} />
        {
          [...Array(4).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
      </div>
      <div className='row' onClick={clickHandler}>
        <Cell x={0} y={9} letter={theGuesses["09"]} selected={targetCell === 0 && targetCellY === 9} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[10]} setSelectedWord={setSelectedWord} />
        <Cell x={1} y={9} letter={theGuesses["19"]} selected={targetCell === 1 && targetCellY === 9} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[10]} setSelectedWord={setSelectedWord} />
        <Cell x={2} y={9} letter={theGuesses["29"]} selected={targetCell === 2 && targetCellY === 9} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[10]} setSelectedWord={setSelectedWord} />
        <Cell x={3} y={9} letter={theGuesses["39"]} selected={targetCell === 3 && targetCellY === 9} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[4, 10]} setSelectedWord={setSelectedWord} />
        <Cell x={4} y={9} letter={theGuesses["49"]} selected={targetCell === 4 && targetCellY === 9} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[10]} setSelectedWord={setSelectedWord} />
        {
          [...Array(5).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
        <Cell x={10} y={9} letter={theGuesses["109"]} selected={targetCell === 10 && targetCellY === 9} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[11]} setSelectedWord={setSelectedWord} />
        <Cell x={11} y={9} letter={theGuesses["119"]} selected={targetCell === 11 && targetCellY === 9} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[9, 11]} setSelectedWord={setSelectedWord} />
        <Cell x={12} y={9} letter={theGuesses["129"]} selected={targetCell === 12 && targetCellY === 9} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[11]} setSelectedWord={setSelectedWord} />
        <Cell x={13} y={9} letter={theGuesses["139"]} selected={targetCell === 13 && targetCellY === 9} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[8, 11]} setSelectedWord={setSelectedWord} />
        <Cell x={14} y={9} letter={theGuesses["149"]} selected={targetCell === 14 && targetCellY === 9} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[11]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <Cell x={16} y={9} letter={theGuesses["169"]} selected={targetCell === 16 && targetCellY === 9} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[12]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
      </div>
      <div className='row' onClick={clickHandler}>
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <Cell x={3} y={10} letter={theGuesses["310"]} selected={targetCell === 3 && targetCellY === 10} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[4]} setSelectedWord={setSelectedWord} />
        {
          [...Array(7).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
        <Cell x={11} y={10} letter={theGuesses["1110"]} selected={targetCell === 11 && targetCellY === 10} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[9]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <Cell x={13} y={10} letter={theGuesses["1310"]} selected={targetCell === 13 && targetCellY === 10} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[8]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <Cell x={16} y={10} letter={theGuesses["1610"]} selected={targetCell === 16 && targetCellY === 10} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[12]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
      </div>
      <div className='row' onClick={clickHandler}>
        {
          [...Array(11).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
        <Cell x={11} y={11} letter={theGuesses["1111"]} selected={targetCell === 11 && targetCellY === 11} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[9]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <Cell x={13} y={11} letter={theGuesses["1311"]} selected={targetCell === 13 && targetCellY === 11} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[8, 13]} setSelectedWord={setSelectedWord} />
        <Cell x={14} y={11} letter={theGuesses["1411"]} selected={targetCell === 14 && targetCellY === 11} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[13]} setSelectedWord={setSelectedWord} />
        <Cell x={15} y={11} letter={theGuesses["1511"]} selected={targetCell === 15 && targetCellY === 11} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[13]} setSelectedWord={setSelectedWord} />
        <Cell x={16} y={11} letter={theGuesses["1611"]} selected={targetCell === 16 && targetCellY === 11} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[12, 13]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
      </div>
      <div className='row' onClick={clickHandler}>
        {
          [...Array(9).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
        <Cell x={9} y={12} letter={theGuesses["912"]} selected={targetCell === 9 && targetCellY === 12} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[14]} setSelectedWord={setSelectedWord} />
        <Cell x={10} y={12} letter={theGuesses["1012"]} selected={targetCell === 10 && targetCellY === 12} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[14]} setSelectedWord={setSelectedWord} />
        <Cell x={11} y={12} letter={theGuesses["1112"]} selected={targetCell === 11 && targetCellY === 12} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[9, 14]} setSelectedWord={setSelectedWord} />
        <Cell x={12} y={12} letter={theGuesses["1212"]} selected={targetCell === 12 && targetCellY === 12} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[14]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <div className='emptyCell'/>
        <Cell x={16} y={12} letter={theGuesses["1612"]} selected={targetCell === 16 && targetCellY === 12} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[12]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
      </div>
      <div className='row' onClick={clickHandler}>
        {
          [...Array(11).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
        <Cell x={11} y={13} letter={theGuesses["1113"]} selected={targetCell === 11 && targetCellY === 13} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[9]} setSelectedWord={setSelectedWord} />
        {
          [...Array(4).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
        <Cell x={16} y={13} letter={theGuesses["1613"]} selected={targetCell === 16 && targetCellY === 13} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[12]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
      </div>
      <div className='row' onClick={clickHandler}>
        {
          [...Array(12).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
        <Cell x={12} y={14} letter={theGuesses["1214"]} selected={targetCell === 12 && targetCellY === 14} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[15]} setSelectedWord={setSelectedWord} />
        <Cell x={13} y={14} letter={theGuesses["1314"]} selected={targetCell === 13 && targetCellY === 14} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[15]} setSelectedWord={setSelectedWord} />
        <Cell x={14} y={14} letter={theGuesses["1414"]} selected={targetCell === 14 && targetCellY === 14} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[15]} setSelectedWord={setSelectedWord} />
        <Cell x={15} y={14} letter={theGuesses["1514"]} selected={targetCell === 15 && targetCellY === 14} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[15]} setSelectedWord={setSelectedWord} />
        <Cell x={16} y={14} letter={theGuesses["1614"]} selected={targetCell === 16 && targetCellY === 14} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[12, 15]} setSelectedWord={setSelectedWord} />
        <Cell x={17} y={14} letter={theGuesses["1714"]} selected={targetCell === 17 && targetCellY === 14} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[15]} setSelectedWord={setSelectedWord} />
      </div>
      <div className='row' onClick={clickHandler}>
        {
          [...Array(16).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
        <Cell x={16} y={15} letter={theGuesses["1615"]} selected={targetCell === 16 && targetCellY === 15} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[12]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
      </div>
      <div className='row' onClick={clickHandler}>
        {
          [...Array(16).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
        <Cell x={16} y={16} letter={theGuesses["1616"]} selected={targetCell === 16 && targetCellY === 16} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[12]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
      </div>
      <div className='row' onClick={clickHandler}>
        {
          [...Array(16).keys()].map(x => x + 0).map((idx) => {
            return <div key = {idx} className='emptyCell'/>
          })
        }
        <Cell x={16} y={17} letter={theGuesses["1617"]} selected={targetCell === 16 && targetCellY === 17} setTargetCell={setTargetCell} setTargetCellY={setTargetCellY} direction={direction} targetCell={targetCell} targetCellY={targetCellY} selectedWord={selectedWord} word={[12]} setSelectedWord={setSelectedWord} />
        <div className='emptyCell'/>
      </div>
    </div>
  )
};
