import React, { useState } from "react";
import {v4 as uuid} from "uuid";

import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, setCards] = useState([]);
  const baseURL = "https://deckofcardsapi.com/api/deck/new/draw/"
  const apiData= useAxios(baseURL)
  const {response, error}=apiData
    setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  ;

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={apiData}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
