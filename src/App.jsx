import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import EditPage from "./pages/EditPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Richard Sanchez",
    title: "Product Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    phoneNumber: "+123-456-7890",
    email: "hello@reallygreatsite.com",
    location: "123 Anywhere St., Any City",
    languages: ["English", "German", "Spanish"],
    expertise: [
      "Management",
      "Creativity",
      "Digital Marketing",
      "Negotiation",
      "Critical Thinking",
      "Leadership",
    ],
    experiences: [
      {
        company: "Arrowwai Industries",
        city: "Sydney",
        country: "Australia",
        from: 2020,
        to: 2022,
      },
      {
        company: "Wardiere Inc.",
        city: "Sydney",
        country: "Australia",
        from: 2016,
        to: 2020,
      },
      {
        company: "Studio Showde",
        city: "Sydney",
        country: "Australia",
        from: 2010,
        to: 2015,
      },
    ],
    education: [
      {
        university: "Borcelle University",
        career: "Bachelor of Business Management",
        from: 2014,
        to: 2018,
      },
    ],
    skillsSummary: [
      { skill: "Design Process", level: 78 },
      { skill: "Project Management", level: 81 },
    ],
  });

  const updateUserInfo = (newInfo) => {
    setUserInfo(newInfo);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/react-demo/" element={<MainLayout />}>
        <Route index element={<HomePage userInfo={userInfo} />} />
        <Route
          path="edit"
          element={
            <EditPage userInfo={userInfo} updateUserInfo={updateUserInfo} />
          }
        />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
