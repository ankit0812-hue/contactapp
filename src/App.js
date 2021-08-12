import "./App.css";
import Contact from "./components/contacts/Contact";
import NavBar from "./components/NavBar";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  console.log(store);
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Contact />
      </div>
    </Provider>
  );
}

export default App;
