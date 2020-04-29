import React from "react";

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input
//           type="text"
//           onClick={() => {
//             console.log("I am clicked,");
//           }}
//         />
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};

export default App;

const Cat = () => {
  return <div>Mew!</div>;
};
