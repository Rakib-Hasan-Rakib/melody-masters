import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import InstructorCard from "../../../Components/cards/InstructorCard";
import Container from "../../../Components/Container";

const PopularInstractors = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: popularInstructors = [] } = useQuery(
    ["/users/instractors"],
    async () => {
      const res = await axiosSecure.get("/users/instractors");
      return res.data;
    }
  );


  return (
    <Container>
      <Fade delay={1e2} cascade damping={1e-1}>
        <h2 className="section-title">popular instractors</h2>
      </Fade>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-8 md:my-12">
        {popularInstructors?.slice(0, 6).map((instructor, i) => {
          return <InstructorCard key={i} instructor={instructor} />;
        })}
      </div>
    </Container>
  );
};

export default PopularInstractors;
