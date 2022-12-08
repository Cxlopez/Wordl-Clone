import React, { useContext } from 'react'
import { AppContext } from "../App"

function Key({keyVal, bigKey}) {
  const {board, setBoard, currentAttempt, setCurrentAttempt} = useContext(AppContext);

  const selectLetter = () => {
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrentAttempt({attempt: currentAttempt.attempt, letterPos: currentAttempt.letterPos + 1});
  }

  return (
    <div className='key' id={bigKey && "big"} onClick={selectLetter} >{keyVal}</div>
  )
}

export default Key