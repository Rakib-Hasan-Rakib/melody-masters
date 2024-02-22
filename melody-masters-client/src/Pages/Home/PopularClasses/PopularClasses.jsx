import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Container from "../../../Components/Container";
import ClassCard from "../../../Components/cards/ClassCard";

const PopularClasses = () => {
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
        <h2 className="section-title">popular classes</h2>
      </Fade>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-8 md:my-12">
        {approvedClasses?.slice(0, 6).map((approvedClass, i) => {
          return <ClassCard key={i} approvedClass={approvedClass} />;
        })}
      </div>
    </Container>
  );
};

export default PopularClasses;
