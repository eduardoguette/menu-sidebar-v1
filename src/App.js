import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./App.css";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Product from "./pages/Product";
import NoMatch from "./pages/NoMatch";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/products" component={Product} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
