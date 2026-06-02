import { useState } from "react"
import Navbar from "./components/Navbar"
import { Route, Routes ,useLocation } from "react-router-dom"
import CarDetails from "./pages/CarDetails";
import Home from "./pages/Home";
import MyBookings from "./pages/MyBookings";
import Cars from "./pages/Cars";
import Footer from "./components/Footer";
import Layout from "./pages/owner/Layout";
import Dashboard from "./pages/owner/Dashboard";
import AddCar from "./pages/owner/AddCar";
import ManageCars from "./pages/owner/ManageCars";
import ManageBookings from "./pages/owner/ManageBookings";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [showLogin , setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');

  return (
    <div>
        {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}


        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/car-details/:id' element ={<CarDetails/>}/>
          <Route path='/my-bookings' element ={<MyBookings/>}/>
          <Route path='/cars' element ={<Cars/>}/>

          {/*Owner routes */}
          <Route path='/owner' element={<Layout/>}/>
          <Route path='/owner/dashboard' element={<Dashboard/>}/>
          <Route path='/owner/add-car' element={<AddCar/>}/>
          <Route path='/owner/manage-cars' element={<ManageCars/>}/>
          <Route path='/owner/manage-bookings' element={<ManageBookings/>}/>
        </Routes>

        {/* Global Footer rendered on all consumer-facing pages */}
        {!isOwnerPath && <Footer />}
    </div>
  );
};

export default App;

