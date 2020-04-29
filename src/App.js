import React from "react";

const App = () => {
  const profiles = [
    { name: "manbow", age: 10 },
    { name: "zinbeizame", age: 11 },
    { name: "zinbei" },
  ];
  return (
    <div>
      {profiles.map((profiles, index) => {
        return <User name={profiles.name} age={profiles.age} key={index} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      Hello! {props.name}, my years {props.age} old!{" "}
    </div>
  );
};
export default App;

User.defaultProps = {
  age: 1,
};
