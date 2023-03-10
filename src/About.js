import React from 'react'
import styled from "styled-components";
import HeroSection from './component/HeroSection';
import { useProductContext } from './Context/ProductContext';


const About = () => {

// const yourName = useContext(AppContext)

  const { sName } = useProductContext;
  
  console.log("age to myAge",sName)
  return (
    <Wrapper>
      {/* <div> {yourName} </div> */}
       <HeroSection
       storeName = {sName}
       />
    </Wrapper>
  )
}

export default About

const Wrapper = styled.section`
height: 100vh;
background-color: ${({ theme }) => theme.colors.bg};
`;



// import React ,{useContext}from 'react'
// import styled from "styled-components";
// import HeroSection from './component/HeroSection';
// import { context } from './Context/ProductContext';


// const About = () => {

// // const yourName = useContext(AppContext)

//   const { sName } = useContext(context);
  
//   console.log("age to myAge",sName)
//   return (
//     <Wrapper>
//       {/* <div> {yourName} </div> */}
//        <HeroSection
//        storeName = {sName}
//        />
//     </Wrapper>
//   )
// }

// export default About

// const Wrapper = styled.section`
// height: 100vh;
// background-color: ${({ theme }) => theme.colors.bg};
// `;