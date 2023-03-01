
import React from "react";
import styled from "styled-components";
import HeroSection from "./component/HeroSection";

const Home = () => {

  const name = "DREEM STORE"
  return <Wrapper className="test">
    <HeroSection
    storeName = {name}
    />
  </Wrapper>;
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;