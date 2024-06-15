import React from "react";
import { useNavigate } from "react-router-dom";

function Doctor({ doctor }) {
  const navigate = useNavigate();
  return (
    <div
      className="card p-2 cursor-pointer"
      onClick={() => navigate(`/book-appointment/${doctor._id}`)}
    >
      <h1 className="card-title">
        {doctor.firstName} {doctor.lastName}
      </h1>
      <hr />
      <p className="card-details">
        <span class="emoji">📞</span>
        <b>Phone Number :</b>
        <span class="phone">{doctor.phoneNumber}</span>
      </p>
      <p className="card-details">
        <span class="emoji">🏠</span>
        <b>Address :</b>
        <span class="address">{doctor.address}</span>
      </p>
      <p className="card-details">
        <span class="emoji">💰</span>
        <b>Fee per Visit :</b>
        <span class="fee">{doctor.feePerCunsultation}</span>
      </p>
      <p className="card-details">
        <span class="emoji">⏰</span>
        <b>Timings :</b>
        <span class="timings">
          {doctor.timings[0]} - {doctor.timings[1]}
        </span>
      </p>
    </div>
  );
}

export default Doctor;
