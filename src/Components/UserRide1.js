import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserRide.css";
import Header from "./Header";
import Footer from "./Footer";
function UserRide1() {
  let navigate = useNavigate();
  return (
    <div className="page">
      <Header />
      <h1 className="pt-4 mx-auto text-center">Book a ride</h1>
      <form className="head w-50 mx-auto mt-5 mb-0">
        <label>
          <b>Number of passengers:</b>
        </label>
        <input type="text" className="form-control mb-2" />

        <label>
          <b>Phone No:</b>
        </label>
        <input type="number" className="form-control mb-2" />

        <label>
          <b>Pick-up location:</b>
        </label>
        <input type="location" className="form-control mb-2" />

        <label>
          <b>Destination:</b>
        </label>
        <input type="text" className="form-control mb-2" />

        <label>
          <b>Date of Ride:</b>
        </label>
        <input type="date" className="form-control mb-2" />

        <label>
          <b>Time:</b>
        </label>
        <select id="" className="form-select mb-3" defaultValue="">
          <option value="" disabled>
            <placeholder>Choose option</placeholder>
          </option>
          <option value="select">8AM-12PM</option>
          <option value="select">12PM-5PM</option>
          <option value="select">5PM-12AM</option>
        </select>
        <label>
          <b>Restrictions:</b>
        </label>
        <textarea
          name="restrictions"
          className="form-control mb-3 rounded-input"
        ></textarea>

        <div className="pb-3">
          <label>
            <b>Preferred driver:</b>
          </label>
          <div className="form-check">
            <input
              type="radio"
              id="m"
              className="form-check-input"
              value="male"
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="f"
              className="form-check-input"
              value="female"
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-warning"
          onClick={() => navigate("/login/CarPool/UserRide/AvailableDrivers")}
        >
          Book Ride
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default UserRide1;
