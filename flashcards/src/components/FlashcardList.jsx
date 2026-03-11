import React from "react";
import { useState } from "react";
import Flashcard from "./Flashcard.jsx";

const flashcards = [
    {id: 1, term: "سَلام | salam", image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTRtendxdm5oYmltOXlhZ3FseXh0YzBmdXh6dmtvY3A1ams5dXRxZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1JSirM9CWto4poulJi/giphy.gif", answer: "hello", speech:"phrase"},
    {id: 2, term: "چای | chai", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBDhQJx667QxpwIu4QPK2Y-fPfaE-JTVFwk_UKixeaD1H-rpY656pGdDbzZ8B4HFryTRzKgSr8BObhijexlbEHf674Agxbl53jHFgtG7tV0DKvdGdAsIcO_ss_DR-ljeppzYr9Lmj0wXw/s400/cafe_tea.png", answer: "tea", speech:"noun"},
    {id: 3, term: "چِطوری؟ | chetori?", image: "", answer: "how are you?", speech:"phrase"},
    {id: 4, term: "خوردن | khordan", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3nqz1pj_TrKHCZHA3d12sb24rzCZUYwVNh8EuOvwgoQX2nYe6f8NtNH5hJlOQiecqatubzL1M7P5PKuA8suoCdN4Gf6IRlVK6EChrhyphenhyphenJXIt2UJdzl9kXaO3kt1-eW74Xstk08hkn_pmbO/s400/syokuji_black_woman.png", answer: "to eat", speech:"verb"},
    {id: 5, term: "با نَمَک | ba namak", image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWg5ZDUxb3oxcHJmYjh5azFoNWQ4cmUyZ3cxcXI1eHp6b3I3OTltMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XVNti98ywJktDDIc4b/giphy.gif", answer: "funny (lit: with salt)", speech:"slang"},
    {id: 6, term: "دوست دار‌َم | doost daram", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhj08k602nm4xlX4xM1Sn9_jBfcAc5c4qEiV1ecjN94uIKcmofjboYGecRUpKzYI5fXTASCXyRDhBrpnH5L3iWTg8ahiRSe-9bxOFGJzG9gLXfle3zf6zDe9JAzraphlqeHy7phs6KytdE/s400/massage_hand.png", answer: "I like", speech:"verb"},
    {id: 7, term: "بی نَمَک | bee namak", image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmN4anFmNGoyYW43bndybXRzMjhwOHNkeWFlb2h2a3N2M2tlZThtdSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/nIJnkEKdxPn1mn0BAw/giphy.gif", answer: "not funny; boring (lit: without salt)", speech:"slang"},
    {id: 8, term: "خوابیدن | khabidan", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhm0fPMrRzhBibgFfkBHuH-OakUgAYg5ym1TQwYwCa-lkvoW9EJedpCz3QtreMM0w53b2rjItjSmqNBn5QQ4ae011EhmC2CVAPqtvKK2cqkrawbK7DWAQdsXJXtdG6fe2YjgNFTiWAkImHA/s400/bd_girl_sleep.png", answer: "to sleep", speech:"verb"},
    {id: 9, term: "غَذا | ghaza", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmYhePtJYmJgrATZuI7RE1gtxYzfiv7nPv_PBtIT6rt4p7BmaMEZoH9lEiYqqcSn2HOiDa6yfyEfxbBoPHSp0pE-bjXGyn4CGwKyCTXhdiwZ5hDgSJWUItmeY8N7jeWz-z83X4QUf5KJpb/s400/vegetable_curry.png", answer: "food", speech:"noun"},
    {id: 10, term: "مِرسی | merci", image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2ptZWZ4ZTF3MnVscTN1NnA1Y2N5bHc3NWRnYmY5djd4eXF5ejd5ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MQxc0ObWBarylmEYNR/giphy.gif", answer: "thank you", speech:"phrase"},
];

function FlashcardList () {
  const [currentIndex, setCurrentIndex] = useState(0);

  //These control the button scrolling of the cards
  function nextCard() {
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  }

  function prevCard() {
    setCurrentIndex((prev) =>
      prev === 0 ? flashcards.length -1 : prev - 1
    );
  }

  //I believe this line shows only one card at a time :)
  const currentCard = flashcards[currentIndex];

  return (
    <div className="flashcard-container">
      <Flashcard
        key={currentCard.id} //important to reset the flip
        term={currentCard.term} //the information on the front of the card
        image={currentCard.image} //will be placed on the front of the card
        answer={currentCard.answer} //on thr back side of the crad
        speech={currentCard.speech} //to help woth color coding cards
      />
      <div className="buttons">
        <button onClick={prevCard}>←</button>
        <button onClick={nextCard}>→</button>
      </div>
    </div>
  )

}

export default FlashcardList;