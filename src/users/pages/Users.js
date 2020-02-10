import React from "react";
import { UserList } from "../components/UserList";

export const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Alex Selariu",
      image:
        "https://image.shutterstock.com/image-photo/beauty-woman-face-portrait-beautiful-260nw-488715607.jpg",
      places: 3
    }
  ];
  return <UserList items={USERS} />;
};
