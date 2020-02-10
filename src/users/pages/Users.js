import React from "react";
import { UserList } from "../components/UserList";

export const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Marina Adriana",
      image:
        "https://image.shutterstock.com/image-photo/beauty-woman-face-portrait-beautiful-260nw-488715607.jpg",
      places: 1
    },
    {
      id: 2,
      name: "Alex Selariu",
      image:
        "https://www.skintransform.co.uk/wp-content/uploads/2016/10/Men-Face6.jpg",
      places: 3
    }
  ];
  return <UserList items={USERS} />;
};
