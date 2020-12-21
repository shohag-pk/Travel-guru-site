import React, { useContext } from 'react';
import { DestinationContext } from '../../App';
import Navber from '../Navber/Navber';
import Logo2 from "../../images/Logo2.png";
import { detailsRoom } from '../../FakeData/detailsRoom';
import RoomDetails from '../RoomDetails/RoomDetails';
import GoogleMap from '../GoogleMap/GoogleMap';

const Hotel = () => {
    const [destination] = useContext(DestinationContext);
    return (
        <div>
            <Navber color="black" image={Logo2} />

            <div
        className="container row"
        style={{ marginTop: "50px", marginLeft: "120px" }}
      >
        <div className="col-md-6">
          <small>252 stays from Sep 20-25 with 3 guests</small>
          <h4>Stay in {destination.name}</h4>
          {detailsRoom.map((hotel) => {
            return <RoomDetails hotel={hotel} />;
          })}
        </div>

        <div className="col-md-6">
          <GoogleMap />
        </div>

      
        </div>

        </div>
    );
};

export default Hotel;