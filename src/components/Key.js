import React, { useContext } from 'react';
import { AppContext } from "../App";

function Key({ keyVal, bigKey }) {
  const { board, setBoard, currentAttempt, setCurrentAttempt } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "ENTER") {
      if (currentAttempt.letterPos !== 5) return;
      setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letterPos: 0})
    } else {
      if (currentAttempt.letterPos > 4) return;
      const newBoard = [...board];
      newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyVal;
      setBoard(newBoard);
      setCurrentAttempt({ attempt: currentAttempt.attempt, letterPos: currentAttempt.letterPos + 1 });
    }
  };

  return (
    <div className='key' id={bigKey && "big"} onClick={selectLetter} >{keyVal}</div>
  )
}

export default Key