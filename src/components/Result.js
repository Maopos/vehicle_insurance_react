import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { PropTypes } from "prop-types";

const ResultParagraph = styled.p`
  background-color: rgb(127, 224, 237);
  font-size: 25px;
  padding: 2rem;
  text-align: center;
  font-weight: bold;
  
`;

const Result = ({ quote }) => {
  return quote === 0 ? (
    <ResultParagraph>Choose Brand, year and plan...</ResultParagraph>
  ) : (
    <TransitionGroup component="span" className="result">
      <CSSTransition classNames="result" key={quote} timeout={{enter: 500, exit: 500}} >
        <ResultParagraph>Total Quote: US$ {quote}</ResultParagraph>
      </CSSTransition>
    </TransitionGroup>
  );
};

Result.propTypes = {
    quote: PropTypes.number.isRequired
}

export default Result;
