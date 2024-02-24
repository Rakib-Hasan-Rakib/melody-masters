import React from "react";
import { useQuery } from "react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import InstructorCard from "../../Components/cards/InstructorCard";
import Container from "../../Components/Container";

const Instractors = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: instructors = [] } = useQuery(
    ["/users/instractors"],
    async () => {
      const res = await axiosSecure.get("/users/instractors");
      return res.data;
    }
  );



  return (
    <Container>
      <h2 className="section-title">Meet Our Expert Team</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-8 md:my-12">
        {instructors?.map((instructor, i) => {
          return <InstructorCard key={i} instructor={instructor} />;
        })}
      </div>
    </Container>
  );
};

export default Instractors;
