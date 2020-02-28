import React from "react";
import { useParams } from "react-router-dom";
import { Input } from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/util/validators";

const PLACES = [
  {
    id: "1",
    title: "Catedrala",
    description: "Capitala Europeana 2020",
    imageUrl: "https://s.inyourpocket.com/img/figure/2018-05/timisoara.jpg",
    address: "Timisoara",
    location: {
      lat: 45.7478993,
      lng: 21.2074717
    },
    creator: "1"
  },
  {
    id: "2",
    title: "Piata Unirii",
    description: "Capitala Europeana 2020",
    imageUrl:
      "https://cdn.britannica.com/02/145402-050-334785E9/Timisoara-Rom.jpg",
    address: "Timisoara",
    location: {
      lat: 43.7478993,
      lng: 20.2074717
    },
    creator: "2"
  }
];

export const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = PLACES.find(p => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description"
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        Update place
      </Button>
    </form>
  );
};
