import React from "react";
import Card from "../../shared/components/UIElements/Card";
import { Input } from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import "./Auth.css";

export const Auth = () => {
  return (
    <Card className="authentication">
      <h2>Login required</h2>
      <hr />
      <form>
        <Input element="input" id="email" type="email" label="E-Mail" />
      </form>
    </Card>
  );
};
