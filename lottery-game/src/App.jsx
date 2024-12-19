import "./App.css";
import Lottery from "./lottery";
import { sum } from "./helper";

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15; //ticket.every((num) => num === tiket[0]);
  }; //ticket[0] === 0;

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
