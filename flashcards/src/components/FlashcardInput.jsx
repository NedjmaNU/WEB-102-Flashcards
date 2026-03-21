import { useState } from "react";

function FlashcardInput({ correctAnswer, onResult }) {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState(""); // "", "correct", "wrong"

  function handleSubmit() {
    const isCorrect =
      input.trim().toLowerCase() === correctAnswer.toLowerCase();

    setStatus(isCorrect ? "correct" : "wrong");

    // send result back to parent if needed
    if (onResult) {
      onResult(isCorrect);
    }

    setInput(""); //resets after submitting
  }

  //inbetween input and button in the return should be the Flashcard Input function

  return (
    <div className="answer-input">
      <input
        type="text"
        placeholder="Your answer here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      

      <button onClick={handleSubmit}>Submit</button>

      {status === "correct" && <p className="correct">✅</p>}
      {status === "wrong" && <p className="wrong">❌</p>}

    </div>
  );
}

export default FlashcardInput;