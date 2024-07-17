import "./App.css";
import Footer from "./components/Footer";
import Headder from "./components/Headder";

function App() {
  return (
    <>
      <div className="main">
        <Headder />
        <div className="temp"></div>
        <Footer />
      </div>
    </>
  );
}

export default App;
