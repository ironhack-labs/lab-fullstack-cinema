import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/movies"
          render={(props) => <Movies {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
