import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Seperator from "../components/Seperator";
import GridLayout from "../layouts/GridLayout";

const HomePage = ({ userInfo }) => {
  console.log("HomePage rendered with userInfo:", userInfo)
  return (
    <>
      <GridLayout>
        <Header userInfo={userInfo} />
        <Seperator />
        <Sidebar userInfo={userInfo} />
        <Content userInfo={userInfo} />
      </GridLayout>
    </>
  );
};

export default HomePage;
