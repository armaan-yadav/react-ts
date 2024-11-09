import React, { useState } from "react";

type Props = {
  name: string;
  age: number;
  gender: "m" | "f";
  email: string;
  specialization: string | null;
};

const Person = (props: Props) => {
  const [showPersonInfo, setShowPersonInfo] = useState<boolean>(true);

  const [inputValue, setInputValue] = useState<string | null>(null);

  // hello
  //my name is the armannn

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="p-4">
      <button
        onClick={(_) => {
          setShowPersonInfo((prev) => !prev);
        }}
      >
        Show Profile
      </button>

      {showPersonInfo && (
        <>
          <div className="border-2 border-[#f1f1f1] w-fit p-4">
            <h1>Hello ${props.name}</h1>
            <h2>Age of the person is {props.age}</h2>
            <h3>
              {props.gender == "m" ? "Person is male" : "Person is female"}
            </h3>
            <h4>Email address of the person : {props.email} </h4>
          </div>

          <div>BIO : {!inputValue ? "No Bio Availavle" : inputValue}</div>
          <input
            type="text"
            onChange={handleChange}
            className="text-black outline-none"
          />
        </>
      )}
    </div>
  );
};

export default Person;
