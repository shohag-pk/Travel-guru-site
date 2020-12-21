import React, { useContext } from "react";
import { DestinationContext } from "../../App";
import TravelDestination from "../TravelDestination/TravelDestination";
import Navbar from "../Navber/Navber";




const Home = () => {
    const [destination] = useContext(DestinationContext);
  
    return (
      <div
        style={{
          backgroundImage: ` url(${destination.image})`,
          height: "100vh",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat"

        }}
      >
          <Navbar color="white" ></Navbar>
       <TravelDestination> </TravelDestination>
        
       
      </div>
    );
  };

export default Home;