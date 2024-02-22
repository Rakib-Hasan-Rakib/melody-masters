import { Link } from "react-router-dom";
import "./card.css";

const ClassCard = ({ approvedClass }) => {
  const { photoUrl, className, instractorName, availableSeats, price } =
    approvedClass;
  return (
    <>
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
        <Link to="/classes" className="flex justify-end mx-4">
          <button className="custom-btn">All Classes</button>
        </Link>
      </div>
    </>
  );
};
export default ClassCard;
