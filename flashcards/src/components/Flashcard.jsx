import React from "react";
import { useState } from "react";
import "./Flashcard.css";

function Flashcard({term, image, answer, speech, alt}) {
    const [flipped, setFlipped] = useState(false); //setting up card flipping

    function handleFlip() {
        setFlipped(!flipped);
    }

    //class adding for diff parts of speech
    const speechClass = speech ? `speech-${speech.toLowerCase()}` : "";

    return (
        <div className="card-wrapper" onClick={handleFlip}>
            <div className={`flashcard ${flipped ? "flipped" : ""} ${speechClass}`}> {/*flip state and speech status*/}
                <div className="front">
                    <div className="term">{term}</div>
                    {image && (
                        <img
                            src={image}
                            alt={term}
                            className="flashcard-image"
                         />
                    )}
                </div>
                <div className="back">{answer}</div>
                <span className="hidden">{speech}</span> {/*hidden class to prevent part of speech from showing on the flashcard */}
                <span className="hidden">{alt}</span> {/*this is for alternative answers for input, also hidden*/}
            </div>
        </div>
    )
}

export default Flashcard;