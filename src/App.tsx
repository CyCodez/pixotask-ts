import "./App.css";
import Form from "./components/Form/form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainComponent from "./components/MainComponent/main-component";

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/MainComponent" element={<MainComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
