import React from 'react';
import styled from '@emotion/styled';
import { PropTypes } from "prop-types";

const HeaderContainer = styled.header `
    background: #0043c3;
    padding: 10px 0;
    font-weight: bold;
    
    width: 100%;
    color: white;
    
`;

const Header = ({title}) => {
    return ( 
        <HeaderContainer>
            <h1>{title}</h1>
        </HeaderContainer> 
    );
}
Header.propTypes ={ 
    title: PropTypes.string.isRequired
}
 
export default Header;
