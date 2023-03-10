import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import FormatPrise from "../Helpers/FormatPrise";
// import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <Wrapper>
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price"><FormatPrise price = {price}/></p>
          </div>
        </div>
      </div>
    </NavLink>
    </Wrapper>
  );
};

export default Product;


const Wrapper = styled.section`

`;
