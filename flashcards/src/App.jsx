import React from "react";
import './App.css';
import FlashcardList from "./components/FlashcardList.jsx";


function App() {
  return (
    <div>
      <h1>Farsi Flashcards</h1>
      <h2>Learn Farsi words and phrases!</h2>
      <h3>Red = Noun, Blue = Verb, Purple = Phrases, Green = Slang</h3>
      <h3>Number of cards: 10</h3>
      <br />
      <div className="App">
        <FlashcardList />
      </div>
    </div>
  )
}

export default App;
