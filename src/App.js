
import React from 'react';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import Test from './Test';
import Welcome from './welcome';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
