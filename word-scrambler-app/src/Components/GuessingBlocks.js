import { useState } from 'react';

const GuessingBlocks = ({ sentence }) => {

  const [userInput, setUserInput] = useState('')

  const getUserInput = (e) => {
    e.preventDefault()
    setUserInput(e.target.value)
  }

for (let i = 0; i < sentence.length; i++) {
  if(userInput === sentence[i]) {
    console.log('correct')
  } else {
    console.log('wrong ')

  }
}



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