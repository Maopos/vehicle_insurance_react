import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import { getDiffYear, getIncrementBranch, getIncrementType } from "../helper";
import { PropTypes } from "prop-types";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
  color: black;
`;

const FormTag = styled.form`
  margin-bottom: 200px;
  margin: 30px 150px;
`;

const Select = styled.select`
  display: block;
  width: 50%;
  padding: 0.5rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
  cursor: pointer;
  text-align: center;
`;

const InputRadio = styled.input`
  margin: 1rem;
  cursor: pointer;
`;

const Boton = styled.button`
  background: #0043c3;
  color: white;
  font-size: 16px;
  width: 60%;
  padding: 0.8rem;
  font-weight: bold;
  border: none;
  transition: 0.2s ease-in;
  margin: 2rem;

  &:hover {
    background: blue;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background: red;
  color: white;
  padding: 1rem;
  width: 90%;
  text-align: center;

  margin: 0 auto 2rem;
`;

const Form = ({saveResume, saveReload}) => {
  const [data, saveData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  const [error, saveError] = useState(false);

  // Extract values from state
  const { brand, year, plan } = data;

  // Reading form data
  const getInfo = (e) => {
    saveData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // Submit - Quote button
  const handleQuote = (e) => {
    e.preventDefault();
    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      saveError(true);
      return;
    }
    saveError(false);

    // Base Result
    let result = 2000;

    // Year diff
    const diffYear = getDiffYear(year);

    result -= ((diffYear * 3) * result ) / 100; // Increment By Year
    result *= getIncrementBranch(brand) // Increment By Branch
    result *= getIncrementType(plan) // Increment By Plan

    result = parseFloat(result).toFixed(2)
    
    saveReload(true);

    setTimeout(() => {
      saveReload(false);
      saveResume({
      quote: Number(result),
      data
    });
    }, 2000);

    
  };

  

  return (
    <div>
      <FormTag>
        {error ? <Error>All fields are required...</Error> : null}
        <Field>
          <Label htmlFor="">Brand</Label>
          <Select name="brand" value={brand} onChange={getInfo} id="">
            <option value="">-- Select --</option>
            <option value="American">American</option>
            <option value="European">European</option>
            <option value="Asiatic">Asiatic</option>
          </Select>
        </Field>
        <br />
        <Field>
          <Label htmlFor="">Year</Label>
          <Select name="year" value={year} onChange={getInfo} id="">
            <option value="">-- Select --</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
          </Select>
        </Field>
        <br />
        <Field>
          <Label htmlFor="">Plan</Label>
          <InputRadio
            type="radio"
            name="plan"
            value="Basic"
            checked={plan === "Basic"}
            onChange={getInfo}
          />
          Basic
          <InputRadio
            type="radio"
            name="plan"
            value="Premium"
            checked={plan === "Premium"}
            onChange={getInfo}
          />
          Premium
        </Field>
        <Boton type="button" onClick={handleQuote}>
          Quote
        </Boton>
      </FormTag>
    </div>
  );
};

Form.propTypes = {
  saveResume: PropTypes.func.isRequired,
  saveReload: PropTypes.func.isRequired
}

export default Form;
