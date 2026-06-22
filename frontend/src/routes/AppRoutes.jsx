import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequestRide from "../pages/RequestRide";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Passenger from "../pages/Passenger";
import Driver from "../pages/Driver";
import Profile from "../pages/Profile";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/passenger" element={<Passenger />} />
                <Route path="/driver" element={<Driver />} />
                <Route path="/profile" element={<Profile />} />
                <Route
  path="/request"
  element={<RequestRide />}
/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;