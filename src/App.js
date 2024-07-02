import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Paitent from './Components/Paitent';
import Appointment from './Components/Appointment';
import Doctor from './Components/Doctor';
import ApiState from './context/ApiState';
function App() {
  return (
    <>
      <ApiState>
        <Router>
          <div className="container ">
            <Navbar />
          </div>
          <div className="container">
            <Routes>
              <Route path="/" element={<Appointment />} />
              <Route path="/doctor" element={<Doctor />} />
              <Route path="/paitent" element={<Paitent />} />

            </Routes>
          </div>
        </Router>
      </ApiState>
    </>
  );
}

export default App;
