import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Header/>
           
            <Home />
            
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
