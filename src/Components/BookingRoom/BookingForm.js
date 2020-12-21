import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DestinationContext } from '../../App';
import calenderIcon from "../../images/Icon/calender_icon.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
    const [destination] = useContext(DestinationContext);

    const history = useHistory();

    const handleBooking = (e) => {
        e.preventDefault();
        history.push("/hotel");
      };

      let [startDate, setStartDate] = useState(new Date());
      const [endDate, setEndDate] = useState(new Date());

    return (
        <form
      style={{
        width: "400px",
      }}
      onSubmit={handleBooking}
    >
      <div className="form-group">
        <label for="">Origin</label>
        <input type="text" className="form-control" value="Dhaka" />
      </div>
      <div className="form-group">
        <label for="">Destination</label>
        <input type="text" className="form-control" value={destination.name} />
      </div>

      <div className="d-flex mb-4">
        <div className="ml-1 rounded">
          <p>From</p>
          <img
            src={calenderIcon}
            className="mb-2"
            style={{ height: "20px" }}
            alt=""
          />
          <DatePicker
            closeOnScroll={true}
            selected={startDate}
            onchange={(date) => setStartDate(date)}
          />
        </div>
        <div className="ml-4">
          <p>To</p>
          <img
            src={calenderIcon}
            className="mb-2"
            style={{ height: "20px" }}
            alt=""
          />
          <DatePicker
            closeOnScroll={true}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-warning btn-block">
        Submit
      </button>
    </form>
    );
};

export default BookingForm;