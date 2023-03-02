
import React from "react";
import styled from "styled-components";
import HeroSection from "./component/HeroSection";
import Services from "./component/Services";
import Truested from "./component/Truested";

const Home = () => {

  const name = "DREEM STORE"
  return <Wrapper className="test">
    <HeroSection
    storeName = {name}
    />
    <Services/>
    <Truested/>
  </Wrapper>;
};

const Wrapper = styled.section`
  height: auto;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;