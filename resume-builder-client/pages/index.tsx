import { useSharedState, RoomServiceProvider } from "@roomservice/react";
import React from "react";
import ResumeForm from "../components/resumeForm";

const sendGet = () => {
  fetch("http://localhost:3000/download")
    .then((response) => {
      console.log(response);
    })
    .then((data) => {
      console.log(data);
    });
};

const App = () => {
  const [sharedState, setSharedState] = useSharedState("resume-builder-final");

  return (
    <div>
      <h1>Resume Builder</h1>

      <button
        onClick={() => {
          sendGet();
        }}
      >
        Send GET Request
      </button>

      <ResumeForm />
    </div>
  );
};

export default () => (
  <RoomServiceProvider authUrl={"http://localhost:3000/api/roomservice"}>
    <App />
  </RoomServiceProvider>
);
