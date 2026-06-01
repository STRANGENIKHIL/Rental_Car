import { useEffect } from "react";
import { dummyMyBookingsData } from "../assets/assets";

const MyBookings = () => {

const [bookings, setBookings ]= useState([]);
const currency=import.meta.env.VITE_CURRENCY || '$';

const fetchMyBookings = async ()=>{
  setBookings(dummyMyBookingsData)
};

useEffect(()=>{
  fetchMyBookings();
},[])

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl">


    </div>
  )
}

export default MyBookings