import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavBar from "./components/MainNavBar";
import Body from "./components/Body";
import MyFooter from "./components/MyFooter";
function App() {
  return (
    <div className="App">
      <MainNavBar />
      <Body />
      <MyFooter />
    </div>
  );
}

export default App;
