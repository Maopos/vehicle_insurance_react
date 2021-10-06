import React from "react";
import styled from "@emotion/styled";

const ResumeDiv = styled.div`
  padding: 1rem 0 2rem;
  text-align: center;
  background-color: #93d7ff;
`;
const Ultag = styled.ul`
  width: 100%;
  margin: 0;
  text-align: center;
  
`;

const Litag = styled.li`
  
  margin: auto;
  font-size: 18px;
`;

const Resume = ({ data }) => {
  const { brand, year, plan } = data;

  if (brand === "" || year === "" || plan === "") {
    return null;
  }

  return (
    <ResumeDiv>
      <h2>Quote Resume</h2>
      <Ultag>
        <Litag>Brand: {brand}</Litag>
        
        <Litag>Year: {year}</Litag>
       
        <Litag>Plan: {plan}</Litag>
       
      </Ultag>
    </ResumeDiv>
  );
};

export default Resume;
