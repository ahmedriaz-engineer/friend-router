import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/Nomatch/NoMatch';
import Detail from './components/Detail/Detail';

function App() {
  
  return (
    <div >
      <Router>
        <nav className ="nav">
          <a href="/home">Home</a>
        </nav>

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path= '/detail/:friendId'>
            <Detail></Detail>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
