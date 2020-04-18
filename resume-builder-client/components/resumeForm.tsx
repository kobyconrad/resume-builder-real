import React, { useState } from "react";
import { useSharedState, RoomServiceProvider } from "@roomservice/react";

// sets the interface for the SharedState, types of values accepted into the state
interface SharedState {
  number: number;
  string: string;
  resume: string;
}

interface Resume {
  firstName: string;
  lastName: string;
}

function ResumeFormApp() {
  // <SharedState> sets the type of values that the state will accept tsx (generic syntax)
  const [sharedState, setSharedState] = useSharedState<SharedState>(
    "resume-builder-final"
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstName(event) {
    setFirstName(event.target.value);
  }

  function handleLastName(event) {
    setLastName(event.target.value);
  }

  function sendPost() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: sharedState.resume,
    };

    fetch("http://localhost:3000/buildResume", requestOptions)
      .then((response) => {
        console.log("sent get request");
        console.log(response);
      })
      .then((data) => {
        console.log(data);
      });
  }

  function updateResume() {
    console.log("prevState: ", sharedState.resume);
    setSharedState((prevDoc) => {
      if (!prevDoc.resume) {
        prevDoc.resume = JSON.stringify({ firstName: "", lastName: "" });
      }

      var resumeObj = { firstName, lastName };
      var jsonObj = JSON.stringify(resumeObj);

      prevDoc.resume = jsonObj;

      console.log("newState: ", sharedState.resume);
      sendPost();
    });
  }

  return (
    <div className="formContainer">
      <div className="inputContainer">
        <div className="labelName">First Name</div>
        <textarea
          placeholder="e.g. John"
          value={firstName}
          onChange={handleFirstName}
        ></textarea>
      </div>

      <div className="inputContainer">
        <div className="labelName">Last Name</div>
        <textarea
          placeholder="e.g. Smith"
          value={lastName}
          onChange={handleLastName}
        ></textarea>
      </div>

      <button
        onClick={() => {
          updateResume();
        }}
      >
        Submit
      </button>

      {/* {firstName}
      {lastName} */}
      {sharedState.resume || ""}

      <style jsx>{`
        textarea {
          width: 250px;
          height: 30px;
          resize: none;
          line-height: 30px;
          padding-left: 10px;
          font-size: 14px;
        }
        button {
          width: 100px;
          height: 30px;
        }
        .formContainer {
          width: 400px;
          height: 600px;
          border: 1px solid grey;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: arial;
          flex-direction: column;
        }
        .labelName {
          font-size: 14px;
          margin-bottom: 5px;
        }
        .inputContainer {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}

export default () => (
  <RoomServiceProvider authUrl={"http://localhost:3000/api/roomservice"}>
    <ResumeFormApp />
  </RoomServiceProvider>
);
