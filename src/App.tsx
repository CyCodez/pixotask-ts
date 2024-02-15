import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainComponent from './components/MainComponent/MainComponent';
function App() {

  return (
    <div className="App">
      {/* <MainComponent/> */}
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
