import { useSharedState, RoomServiceProvider } from "@roomservice/react";
import React from "react";

const sendGet = () => {
  fetch("http://localhost:3000/")
    .then((response) => {
      console.log("sent get request");
      console.log(response);
    })
    .then((data) => {
      console.log(data);
    });
};

const App = () => {
  const [sharedState, setSharedState] = useSharedState("my-room");

  function onClick() {
    setSharedState((prevDoc) => {
      prevDoc.number = Math.floor(Math.random() * 100);
    });
  }

  return (
    <div>
      <h1>Open multiple browser windows!</h1>

      <p>{sharedState.number || 0}</p>

      <button onClick={onClick}>Pick Random Number</button>
      <button
        onClick={() => {
          sendGet();
        }}
      >
        Send GET Request
      </button>
    </div>
  );
};

export default () => (
  <RoomServiceProvider authUrl={"http://localhost:3000/api/roomservice"}>
    <App />
  </RoomServiceProvider>
);
