import React, { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "react-query";
import ClassesCard from "./ClassesCard";
import { Fade } from "react-awesome-reveal";
import Container from "../../Components/Container";

const Classes = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: approvedClasses = [] } = useQuery(
    ["approvedClasses"],
    async () => {
      const res = await axiosSecure.get("/approvedClasses");
      return res.data;
    }
  );

  return (
    <Container>
      <Fade delay={1e2} cascade damping={1e-1}>
        <h2 className="section-title">Explore Our Curriculum</h2>
      </Fade>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-8 md:my-12">
        {approvedClasses.map((approvedClass, i) => (
          <ClassesCard approvedClass={approvedClass} key={i} />
        ))}
      </div>
    </Container>
  );
};

export default Classes;
