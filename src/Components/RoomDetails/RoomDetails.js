import React from 'react';
import starIcon from "../../images/Icon/star_1_.png";

const RoomDetails = (props) => {
    const {image, name, rating, peopleRated, rent} = props.hotel;

    return (
        <div>
             <div className="d-flex align-items-center mt-3">
      <div>
        <img
          src={image}
          alt=""
          style={{ width: "150px", borderRadius: "10px" }}
        />
      </div>
      <div className="ml-4">
        <h6>{name}</h6>
        <small>4 guests 2 bedrooms 2 beds 2 baths</small>
        <br />
        <small>With air conditioning kitchen</small>
        <br />
        <small>Cancellation flexibility available</small>
        <br />
        <div className="d-flex mt-1">
          <img
            className="mr-1"
            style={{ height: "12px", marginTop: "4px" }}
            src={starIcon}
            alt=""
          />
          <small>
            {rating} ({peopleRated})
          </small>
          <small className="ml-3 font-weight-bold">${rent}/night</small>
          <small className="ml-3">$200 Total</small>
        </div>
      </div>
    </div>
            
        </div>
    );
};

export default RoomDetails;