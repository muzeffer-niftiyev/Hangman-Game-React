import GuessWord from "./components/GuessWord";
import Letters from "./components/Letters";
import "./App.css";
import { useEffect, useState } from "react";
import wordList from "./data/wordsData";
import Hangman from "./components/Hangman";
import IncorrectGuesses from "./components/IncorrectGuesses";

const App = () => {
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  const [wordFormat, setWordFormat] = useState("");
  const [incorrect, setIncorrect] = useState(0);
  const [incorrectLetters, setIncorrectLetters] = useState([]);

  useEffect(() => {
    const newWord = Math.floor(Math.random() * wordList.length);
    setWord(() => wordList[newWord]?.word);
    setHint(() => wordList[newWord]?.hint);
    setWordFormat(() => "_ ".repeat(wordList[newWord]?.word.length));
  }, []);

  return (
    <div className="container">
      <Hangman incorrect={incorrect} />

      <div className="main">
        <GuessWord word={wordFormat} hint={hint} />

        <IncorrectGuesses
          incorrect={incorrect}
          incorrectLetters={incorrectLetters}
        />

        <Letters
          word={word}
          setWordFormat={setWordFormat}
          setIncorrect={setIncorrect}
          setIncorrectLetters={setIncorrectLetters}
        />
      </div>
    </div>
  );
};

export default App;
