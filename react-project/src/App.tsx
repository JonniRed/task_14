import Header from "./components/top_components/Header/Header";
import "./App.css";
import Presentation from "./components/main_components/presentation/Presentation";

function App(): any {
  return (
    <div className="container">
      <Header />
      <Presentation />
    </div>
  );
}

export default App;
