import React from "react";

const App = () => {
  const profiles = [
    { name: "manbow", age: 10 },
    { name: "zinbeizame", age: 11 },
    { name: "aaaa" },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      Hi! i am {props.name}, and {props.age} years old
    </div>
  );
};

User.defaultProps = {
  age: 1,
};

export default App;
