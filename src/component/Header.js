import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar';

function Header() {


  return (
    <MainHeader className='test'>
        <NavLink to = "./">
           <img src='./images/mylogo.PNG' alt = "my logo img"/>
        </NavLink>
        <NavBar/>
    </MainHeader>
  )
}



export default Header

const MainHeader = styled.header`
padding : 0 4.8rem;
height : 10 rem ;
background-color: ${({theme}) => theme.colors.header_bg};
display : flex;
justify-content : space-between ;
align-items : center;
position : relative;

.logo {
    height : 5rem;
}

`;
