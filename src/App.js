import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Fox from "./Fox";
import Finale from "./Finale";
import Landing from "./Landing";
function App() {
  return (
    <Router>
      <Route exact path="/landing" component={Landing} />
      <Switch>
        <Route exact path="/fill-form" component={Fox} />
        <Route exact path="/Final-form" component={Finale} />
      </Switch>
    </Router>
  );
}

export default App;
