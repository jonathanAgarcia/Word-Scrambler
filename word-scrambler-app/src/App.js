import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState({});
  const [load, setLoad] = useState(false);

  const randoNum = (wordLength) => {
    const num = Math.floor(Math.random() * wordLength);
    return num;
  }

  const wordMixer = (word) => {

    const originalWord = word;
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
    console.log(sentence)

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
      setData(data.data);
      setLoad(true)
    });

  }, [])

  if (load) {
    return (
      <div className="App">
        {sentenceMixer(data.sentence)}
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
