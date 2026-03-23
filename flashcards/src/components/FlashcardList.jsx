import React from "react";
import { useState } from "react";
import Flashcard from "./Flashcard.jsx";
import FlashcardInput from "./FlashcardInput.jsx";
import Score from "./score.jsx";


const flashcards = [
    {id: 1, term: "سَلام | salam", image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTRtendxdm5oYmltOXlhZ3FseXh0YzBmdXh6dmtvY3A1ams5dXRxZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1JSirM9CWto4poulJi/giphy.gif", answer: "hello", alt: ["hello", "hi"], speech:"phrase"},
    {id: 2, term: "چای | chai", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBDhQJx667QxpwIu4QPK2Y-fPfaE-JTVFwk_UKixeaD1H-rpY656pGdDbzZ8B4HFryTRzKgSr8BObhijexlbEHf674Agxbl53jHFgtG7tV0DKvdGdAsIcO_ss_DR-ljeppzYr9Lmj0wXw/s400/cafe_tea.png", answer: "tea", alt:["tea"], speech:"noun"},
    {id: 3, term: "چِطوری؟ | chetori?", image: "", answer: "how are you?", alt:["how are you?", "how have you been?", "how are you", "how have you been"], speech:"phrase"},
    {id: 4, term: "خوردن | khordan", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3nqz1pj_TrKHCZHA3d12sb24rzCZUYwVNh8EuOvwgoQX2nYe6f8NtNH5hJlOQiecqatubzL1M7P5PKuA8suoCdN4Gf6IRlVK6EChrhyphenhyphenJXIt2UJdzl9kXaO3kt1-eW74Xstk08hkn_pmbO/s400/syokuji_black_woman.png", answer: "to eat",  alt:["to eat", "eat"], speech:"verb"},
    {id: 5, term: "با نَمَک | ba namak", image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWg5ZDUxb3oxcHJmYjh5azFoNWQ4cmUyZ3cxcXI1eHp6b3I3OTltMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XVNti98ywJktDDIc4b/giphy.gif", answer: "funny (lit: with salt)", alt:["with salt", "funny"], speech:"slang"},
    {id: 6, term: "دوست دار‌َم | doost daram", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhj08k602nm4xlX4xM1Sn9_jBfcAc5c4qEiV1ecjN94uIKcmofjboYGecRUpKzYI5fXTASCXyRDhBrpnH5L3iWTg8ahiRSe-9bxOFGJzG9gLXfle3zf6zDe9JAzraphlqeHy7phs6KytdE/s400/massage_hand.png", answer: "I like", alt:["I like", "like", "to like"], speech:"verb"},
    {id: 7, term: "بی نَمَک | bee namak", image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmN4anFmNGoyYW43bndybXRzMjhwOHNkeWFlb2h2a3N2M2tlZThtdSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/nIJnkEKdxPn1mn0BAw/giphy.gif", answer: "not funny; boring (lit: without salt)", alt:["not funny", "boring", "without salt"], speech:"slang"},
    {id: 8, term: "خوابیدن | khabidan", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhm0fPMrRzhBibgFfkBHuH-OakUgAYg5ym1TQwYwCa-lkvoW9EJedpCz3QtreMM0w53b2rjItjSmqNBn5QQ4ae011EhmC2CVAPqtvKK2cqkrawbK7DWAQdsXJXtdG6fe2YjgNFTiWAkImHA/s400/bd_girl_sleep.png", answer: "to sleep", alt:["to sleep", "sleep"], speech:"verb"},
    {id: 9, term: "غَذا | ghaza", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmYhePtJYmJgrATZuI7RE1gtxYzfiv7nPv_PBtIT6rt4p7BmaMEZoH9lEiYqqcSn2HOiDa6yfyEfxbBoPHSp0pE-bjXGyn4CGwKyCTXhdiwZ5hDgSJWUItmeY8N7jeWz-z83X4QUf5KJpb/s400/vegetable_curry.png", answer: "food", alt:["food", "foods"], speech:"noun"},
    {id: 10, term: "مِرسی | merci", image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2ptZWZ4ZTF3MnVscTN1NnA1Y2N5bHc3NWRnYmY5djd4eXF5ejd5ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MQxc0ObWBarylmEYNR/giphy.gif", answer: "thank you", alt:["thank you", "thank"], speech:"phrase"},
];

function FlashcardList () {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0); //Makes the score, currently not working
  const [streak, setStreak] = useState(0); //for my streaks
  const [bestStreak, setBestStreak] = useState(0); //to display the longest streak

  //These control the button scrolling of the cards
  function nextCard() {
    setCurrentIndex((prev) => {
      if (prev === flashcards.length - 1) return prev; // stops at the end
      return prev + 1;
    });
  }

  function prevCard() {
    setCurrentIndex((prev) => {
      if (prev === 0) return prev; // stop at the beginning
      return prev - 1;
    });
  }

  // function Score({ score, streak, bestStreak})

  //I believe this line shows only one card at a time :)
  const currentCard = flashcards[currentIndex];


  return (
    <div className="flashcard-container">

      <Score 
      score={score}
      streak={streak}
      bestStreak={bestStreak} 
      /> {/* Presents the score*/}

        <div key={currentCard.id}>
        <Flashcard
          key={currentCard.id} //important to reset the flip
          term={currentCard.term} //the information on the front of the card
          image={currentCard.image} //will be placed on the front of the card
          answer={currentCard.answer} //on the back side of the crad
          alt={currentCard.alt} //all the ways to correctly guess the card
          speech={currentCard.speech} //to help woth color coding cards
        />

      <br></br> {/*Space between*/}

      <FlashcardInput
        key={currentCard.id}
        correctAnswer={currentCard.alt}
        onResult={(isCorrect) => {
          if (isCorrect) {
            setScore((prev) => prev + 1);

            setStreak((prev) => {
              const newStreak = prev + 1;

              setBestStreak((best) => Math.max(best, newStreak));

              return newStreak;
            });

          } else {
            setStreak(0);
          }
        }}
      
      /> {/*Input info slot I hope is correct omg*/}
      </div>


      <div className="buttons">
        <button 
        onClick={prevCard}
        disabled={currentIndex === 0}
        >
          ←
        </button>

        <button 
        onClick={nextCard}
        disabled={currentIndex === flashcards.length - 1}
        >
          →
        </button>
      </div>
    </div>
  )

}

export default FlashcardList;