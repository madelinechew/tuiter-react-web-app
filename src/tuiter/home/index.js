import React from "react";
import TuitList from "../tuits";
import Tuiter from "..";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
  return (
    <Tuiter active="home">
      <>
        <h4>Home</h4>
        <WhatsHappening/>
        <TuitList />
      </>
    </Tuiter>
  );
};
export default HomeComponent;
