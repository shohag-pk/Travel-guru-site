import React, { useContext } from 'react';
import { DestinationContext } from '../../App';
import Navber from '../Navber/Navber';
import BookingForm from './BookingForm';


const Booking = () => {
    const [destination] = useContext(DestinationContext);
    return (
        <div
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${destination.image})`,
            height: "100vh",
            backgroundSize: "cover"
          }}
        >

            <Navber color="white" />

            <div
                    className="container row text-light mt-5"
                    style={{ marginLeft: "150px", paddingTop: "100px" }}
                >
                    <div     className="col-md-6 mt-4" style={{ padding: "0 60px" }}>
                    <h1>{destination.name}</h1>
                    <p>{destination.details}</p>
        </div>

        <div
          className="col-md-6 font-weight-bold text-dark bg-light p-3"
          style={{ maxWidth: "435px", borderRadius: "10px" }}
        >
            <BookingForm />

            </div>
      </div>

            
        </div>
    );
};

export default Booking;