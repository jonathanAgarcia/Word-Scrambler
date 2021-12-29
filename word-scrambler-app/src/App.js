import './App.css';
import GuessingBlocks from './Components/GuessingBlocks.js'
import { useState, useEffect } from 'react';



function App() {
  const [data, setData] = useState({});
  const [load, setLoad] = useState(false);
  const [sentenceArr, setSentenceArr] = useState([])

  const randoNum = (wordLength) => {
    const num = Math.floor(Math.random() * wordLength);
    return num;
  }

  const wordMixer = (word) => {

    let wordArr = word.split('')
    let firstLetter = wordArr.splice(0, 1)
    let lastLetter = wordArr.splice(wordArr.length - 1, 1)
    let newMiddle = [];

    if (word.length <= 2) {
      return word
    }

    while (wordArr.length > 0) {
      newMiddle.push(wordArr.splice(randoNum(wordArr.length), 1));
    }

      return firstLetter+newMiddle.join('')+lastLetter

  }

  const sentenceMixer = (sentence) => {

    let sentenceArr = sentence.split(' ');
    let mixedArr = []

    for (let i = 0; i < sentenceArr.length; i++) {
      if (sentenceArr[i].length <= 2) {
        mixedArr.push(sentenceArr[i])
      } else {
          mixedArr.push(wordMixer(sentenceArr[i]))
      }
    }
   return mixedArr.join(' ')
  }



  useEffect(() => {
    console.log('useEffect just ran')
    fetch('https://api.hatchways.io/assessment/sentences/1')
    .then(response => response.json())
    .then(data => {
      setSentenceArr(data.data.sentence.split(' '))
      setData(data.data);
      setLoad(true)
    });

  }, [])





  if (load) {
    return (
      <div className="App">
        {sentenceMixer(data.sentence)}
        {data.sentence.split('').map((word) => {
          return(
            <GuessingBlocks/>
          )
        })}
      </div>
    );
  } else {
    return (
      <div>
        loading...
      </div>
    )
  }



}

export default App;
