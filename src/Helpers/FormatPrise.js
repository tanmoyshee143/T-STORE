import React from 'react'
// import styled from "styled-components";


const FormatPrise = ({ price }) => {
    
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(price / 100);


}

export default FormatPrise;

// const Wrapper = styled.section`

// `;