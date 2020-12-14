import './App.css';
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <Counter initialVal={10} interval={5} minimum={0} maximum={20} />
    </div>
  );
}

export default App;
