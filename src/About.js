import React from 'react'
import styled from "styled-components";
import HeroSection from './component/HeroSection';


const About = () => {

  const name = "T STORE"
  const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;
  return (
    <Wrapper>
       <HeroSection
       storeName = {name}
       />
    </Wrapper>
  )
}

export default About