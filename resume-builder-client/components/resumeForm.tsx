import React from "react";

function ResumeForm() {
  return (
    <div className="formContainer">
      <div className="inputContainer">
        <div className="labelName">First Name</div>
        <textarea
          placeholder="e.g. John"
          // value={}
          // onChange={}
        ></textarea>
      </div>

      <div className="inputContainer">
        <div className="labelName">Last Name</div>
        <textarea
          placeholder="e.g. Smith"
          // value={}
          // onChange={}
        ></textarea>
      </div>

      <style jsx>{`
        textarea {
          width: 250px;
          height: 30px;
          resize: none;
          line-height: 30px;
          padding-left: 10px;
          font-size: 14px;
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

export default ResumeForm;
