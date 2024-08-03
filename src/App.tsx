import ListGroup from "./components/ListGroup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NavBar from "./components/NavBar";

// function App() {
//   let items = ["Bangalore", "Lisbon", "Braga"];

//   // Here we are just returning the react component Message inside a div
//   return (
//     <div>
//       <ListGroup items={items} heading="Cities" />
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
