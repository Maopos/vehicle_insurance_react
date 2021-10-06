import React from 'react';
import styled from '@emotion/styled';

const ResultParagraph = styled.p`
    background-color: rgb(127, 224, 237);
    font-size: 25px;
    padding: 2rem;
    text-align: center;
    font-weight: bold;
`;


const Result = ({quote}) => {


    return (
        (quote === 0)? <ResultParagraph>Choose Brand, year and plan...</ResultParagraph> : <ResultParagraph>Total Quote: US$ {quote}</ResultParagraph>
        
    )
}
 
export default Result;