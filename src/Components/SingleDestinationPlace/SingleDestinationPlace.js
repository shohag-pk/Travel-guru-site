import React, { useContext } from "react";
import "./SingleDestinationPlace.css";
import { DestinationContext } from "../../App";

const SingleDestinationPlace = (props) => {
  const [destination, setDestination] = useContext(DestinationContext);

  const { name, image } = props.destination;

  const handleDestination = () => {
    setDestination(props.destination);
  };

  return (
    <div className="col-md-4" style={{ display: "inline-block" }}>
      <div
        className="destination-image"
        onClick={handleDestination}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "right top",
          backgroundRepeat: "no-repeat",
          backgroundOrigin: "border-box",
          width: "98%",
          borderRadius: "10px",
          margin: "2px",
        }}
      >
        <h2
          className="text-left pl-2"
          style={{ height: "350px", paddingTop: "310px", fontSize: "25px" }}
        >
          {name}
        </h2>
      </div>
    </div>
  );
};

export default SingleDestinationPlace;