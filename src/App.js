import "./styles/index.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LCSSchedule from "./pages/LCS-schedule";
import LECSchedule from "./pages/LEC-schedule";
import LCKSchedule from "./pages/LCK-schedule";
import LPLSchedule from "./pages/LPL-schedule";
import LCSStandings from "./pages/LCS-standings";
import LECStandings from "./pages/LEC-standings";
import LCKStandings from "./pages/LCK-standings";
import LPLStandings from "./pages/LPL-standings";

function App() {

  return (
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LCSSchedule />} />
          <Route path="/lec-schedule" element={<LECSchedule />} />
          <Route path="/lck-schedule" element={<LCKSchedule />} />
          <Route path="/lpl-schedule" element={<LPLSchedule />} />
          <Route path="/lcs-standings" element={<LCSStandings />} />
          <Route path="/lec-standings" element={<LECStandings />} />
          <Route path="/lck-standings" element={<LCKStandings />} />
          <Route path="/lpl-standings" element={<LPLStandings />} />
        </Routes>
      </Router>
  );
}

export default App;
