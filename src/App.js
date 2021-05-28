import logo from './logo.svg';
import './App.css';
import EventBlock from './components/eventBlock';
import Home from './components/Pages/Home'
import Game from './components/Pages/Game'
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home}/>
        <Route path="/:id" component={Game}/>
      </div>
    </Router>
    // <Home/>
  );
}

export default App;
