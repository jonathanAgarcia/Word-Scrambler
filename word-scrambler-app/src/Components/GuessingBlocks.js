import { useState } from 'react';

const GuessingBlocks = () => {

  const [userInput, setUserInput] = useState('')

  const getUserInput = (e) => {
    e.preventDefault()
    setUserInput(e.target.value)
  }


console.log(userInput)

  return (
    <div>
      <form>
      <input type='text'
      value={userInput}
      onChange={getUserInput}
      >
      </input>
      </form>
    </div>
  );
}

export default GuessingBlocks;