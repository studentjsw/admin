
import './App.css';
import Wrapper from './wrapper';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
    <Wrapper/>
    </Router>
    </div>
  );
}

export default App;
