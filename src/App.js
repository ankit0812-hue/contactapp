import "./App.css";
import Contact from "./components/contacts/Contact";
import NavBar from "./components/NavBar";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Contact />
            </Route>
            <Route exact path="/addContact">
              <AddContact />
            </Route>
            <Route exact path="/contacts/edit/:id">
              <EditContact />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
