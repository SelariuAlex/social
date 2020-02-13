import React from "react";
import Card from "../../shared/components/UIElements/Card";
import "./PlaceItem.css";

export const PlaceItem = props => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.description}</h3>
        </div>
        <div className="place-item__actions">
          <button>View on map</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </Card>
    </li>
  );
};
