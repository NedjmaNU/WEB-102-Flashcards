import { useState } from "react";
import "./FlashcardInput.css";

function FlashcardInput({ correctAnswer, onResult }) {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState(""); // "", "correct", "wrong"

  function handleSubmit() {
    const isCorrect = correctAnswer.some(
      (ans) => ans.toLowerCase() === input.trim().toLocaleLowerCase()
    );
      
    setStatus(isCorrect ? "correct" : "wrong");

    // sends result back to parent just in case
      onResult(isCorrect);

      setInput(""); //resets after submitting
    }
  

  //inbetween input and button in the return should be the Flashcard Input function

  return (
    <div className={"input"}>

      <input
        type="text"
        placeholder="What's this in English?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      {status === "correct" && <p className="correct">✅ You got it!</p>}
      {status === "wrong" && <p className="wrong">❌ Not quite...</p>}
      
    </div>
  );
}


export default FlashcardInput;