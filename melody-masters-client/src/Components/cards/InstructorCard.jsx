import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  const { photo, email, name } = instructor;
  return (
    <>
      <div className="group bg-gray-100 tracking-wider">
        <div className="h-[250px] overflow-hidden rounded-lg">
          <img
            src={photo}
            alt="instructor photo"
            className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-700"
          />
        </div>
        <div className="space-y-1 p-2 flex flex-col">
          <div>
            <h2 className="card-title capitalize font-bold text-lg lg:text-xl">
              {name}
            </h2>
            <p className="">
              <span className="font-semibold">Email </span>: {email}
            </p>
          </div>
          <Link to="/instractors" className="mt-auto">
            <button className="custom-btn">all instractors</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default InstructorCard;
