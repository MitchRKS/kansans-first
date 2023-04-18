import "./App.css";
import MidSection from "./components/MidSection/MidSection";
import NavBar from "./components/NavBar/NavBar";
import TopBody from "./components/TopBody/TopBody";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <TopBody />
      <MidSection />
      <Footer />
    </div>
  );
}

export default App;
