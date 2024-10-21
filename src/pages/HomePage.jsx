import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Seperator from "../components/Seperator";
import GridLayout from "../layouts/GridLayout";

const HomePage = () => {
  return (
    <>
      <GridLayout>
        <Header />
        <Seperator />
        <Sidebar />
        <Content />
      </GridLayout>
    </>
  );
};

export default HomePage;