import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper className="test">
      <h1>HOME</h1>
    </Wrapper>
  );
};


const Wrapper = styled.section`
background-color: ${({theme}) => theme.colors.home_bg};
width : 100%;
height : 100%;
`;

export default Home;
