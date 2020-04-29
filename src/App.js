import React from "react";
import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    { name: "manbow", age: 10 },
    { name: "zinbeizame", age: 11 },
    { name: "a", age: 11 },
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default App;
