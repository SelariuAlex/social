import React from "react";
import { UserList } from "../components/UserList";

export const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Alex Selariu",
      image:
        "https://www.capital.ro/wp-content/uploads/2019/10/timisoara-catedrala.jpg",
      places: 3
    }
  ];
  return <UserList items={USERS} />;
};
