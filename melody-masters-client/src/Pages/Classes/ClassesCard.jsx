import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useInstractor from "../../hooks/useInstractor";
import useAdmin from "../../hooks/useAdmin";
import Swal from "sweetalert2";
import SuccessAlert from "../../Components/Alerts/SuccessAlert";

const ClassesCard = ({ approvedClass }) => {
  const [disable, setDisable] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isInstractor] = useInstractor();
  const [isAdmin] = useAdmin();
  const { photoUrl, className, instractorName, availableSeats, price } =
    approvedClass;

  const handleSelectClass = (approvedClass) => {
    if (!isAdmin && !isInstractor && user) {
      setDisable(false);
      const studentEmail = user.email;
      const classId = approvedClass["_id"];
      const selectedClass = { ...approvedClass, studentEmail, classId };
      delete selectedClass._id;
      fetch("https://melody-masters-server.vercel.app/selectedClasses", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          SuccessAlert("You selected this class");
          setDisable(true);
        });
    } else if (!user) {
      Swal.fire({
        title: "Login Required",
        text: "Wanna go to the login page",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#008000",
        cancelButtonColor: "#ff0000",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="bg-gray-100 group rounded-lg tracking-wider text-lg">
      <div className="h-[250px] overflow-hidden rounded-lg">
        <img
          src={photoUrl}
          alt="instrument photo"
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-700"
        />
      </div>
      <div className="p-2">
        <h2 className="class-name text-center font-semibold tracking-widest my-2 text-lg md:text-xl xl:text-2xl">
          {className}
        </h2>
        <p>
          <span className="font-semibold">Instructor : </span>
          {instractorName}
        </p>
        <p>
          <span className="font-semibold">Available Seats : </span>
          {availableSeats}
        </p>
        <p>
          <span className="font-semibold">Price : </span> ${price}
        </p>
      </div>
      <div className="flex justify-end mx-4">
        {isAdmin || isInstractor ? (
          <button className="custom-btn" disabled>
            Select Class
          </button>
        ) : (
          <button
            onClick={() => handleSelectClass(approvedClass)}
            className="custom-btn"
            disabled={disable}
          >
            Select Class
          </button>
        )}
      </div>
    </div>
  );
};

export default ClassesCard;
