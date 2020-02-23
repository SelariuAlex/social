import React from "react";
import { Input } from "../../shared/components/FormElements/Input";
import {VALIDATOR_REQUIRE} from '../../shared/util/validators'
import "./NewPlace.css";

export const NewPlace = () => {
  return (
    <div className="place-form">
      <Input element="input" type="text" label="title" validators={[VALIDATOR_REQUIRE()]} errorText='Please enter a valid title'/>
    </div>
  );
};
