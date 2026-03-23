import React from "react";
import "./Score.css";

function Score({ streak, bestStreak }) {
  return <div className="score">
    <h3>Your score: {streak}</h3>
    <h3 className="streak">Longest Streak: {bestStreak}</h3>
    <br></br>
    </div>;
}

export default Score;
