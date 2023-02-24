import React from 'react'
import styled from "styled-components";



const About = () => {
  const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
`;
  return (
    <Wrapper>About</Wrapper>
  )
}

export default About