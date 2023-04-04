import "./App.css";
import Navbar from "./components/UI/Header/Navbar";
import Soon from "./components/Soon";

/* Displays App */
function App() {
  /* Header */
  return (
    <card>
      <div>
        {/* Header */}
        <Navbar />
      </div>
      {/* Content */}
      <div>
        <Soon />
      </div>
      {/* Footer */}
    </card>
  );
}

export default App;
