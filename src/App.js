import "./styles/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LCS from "./pages/LCS";
import LEC from "./pages/LEC";
import LCK from "./pages/LCK";
import LPL from "./pages/LPL";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LCS />} />
        <Route path="/lec" element={<LEC />} />
        <Route path="/lck" element={<LCK />} />
        <Route path="/lpl" element={<LPL />} />
      </Routes>
    </Router>
  );
}

export default App;
