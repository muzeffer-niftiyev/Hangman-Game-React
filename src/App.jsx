import GuessWord from "./components/GuessWord";
import Letters from "./components/Letters";
import "./App.css";
import { useEffect, useState } from "react";
import wordList from "./wordsData";
import Hangman from "./components/Hangman";

const App = () => {
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  const [wordFormat, setWordFormat] = useState("");
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    const newWord = Math.floor(Math.random() * wordList.length);
    setWord(() => wordList[newWord]?.word);
    setHint(() => wordList[newWord]?.hint);
    setWordFormat(() => "_ ".repeat(wordList[newWord]?.word.length));
  }, []);

  return (
    <div className="container">
      <Hangman />

      <div className="main">
        <GuessWord word={wordFormat} hint={hint} incorrect={incorrect} />
        <Letters
          word={word}
          setWordFormat={setWordFormat}
          wordFormat={wordFormat}
          incorrect={incorrect}
          setIncorrect={setIncorrect}
        />
      </div>
    </div>
  );
};

export default App;
