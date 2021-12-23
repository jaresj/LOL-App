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
        <Route exact path="/" component={<LCS />} />
        <Route path="/lec" component={<LEC />} />
        <Route path="/lck" component={<LCK />} />
        <Route path="/lpl" component={<LPL />} />
      </Routes>
    </Router>
  );
}

export default App;
