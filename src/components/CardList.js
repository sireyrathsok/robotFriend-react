import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  // if (true) {
  //   throw new console.error();
  // }
  const robotCmponenent = robots.map((robot) => {
    return (
      <Card
        key={robot.id}
        name={robot.name}
        username={robot.username}
        email={robot.email}
      />
    );
  });
  return <div>{robotCmponenent}</div>;
};

export default CardList;
