import "./App.css";
import BoutiqueList from "./components/BoutiqueList.js";
import LocateMe from "./components/LocateMe.js";
import GetFive from "./components/GetFive.js";

function App() {
  return (
    <div className="App">
      <LocateMe />
      <BoutiqueList />
      <GetFive />
    </div>
  );
}

export default App;
