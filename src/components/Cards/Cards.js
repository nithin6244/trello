import React from "react";
import Card from "../Card/Card";
import "./cards.css";
import { useSelector } from "react-redux";
export default function Cards() {
  const state = useSelector((state) => state.board);
  const searchTitle = useSelector((state) => state.searchCard);

  const filteredTitle = state.filter((card) =>
    card.cardTitle.includes(searchTitle)
  );

  return (
    <div className="cardsContainer">
      {filteredTitle &&
        filteredTitle.map((board) => {
          return (
            <Card
              key={board.cardId}
              cardId={board.cardId}
              title={board.cardTitle}
              description={board.cardDescription}
            ></Card>
          );
        })}
    </div>
  );
}
