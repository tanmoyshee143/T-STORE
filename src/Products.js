import React from "react";
import styled from "styled-components";

const Products = () => {
  return <Wrapper></Wrapper>;
};


export default Products;


const Wrapper = styled.section`

height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;


