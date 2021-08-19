import React from "react";
import Heading from "../components/Heading";
import { products } from "../products";
import styled from "styled-components";
import Rating from "../components/Rating";

const Grid = styled.div`
  margin-top: 6.5rem;
  display: grid;
  grid-template-columns: max-content max-content max-content;
  justify-content: center;
  grid-template-rows: auto;
  gap: 3.5rem;

  @media (max-width: 1000px) {
    grid-template-columns: max-content max-content;
  }
`;

const GridItem = styled.div`
  padding: 6rem;
  background-color: #faf7f2;
  border-radius: 4rem;
`;

const GridImage = styled.img`
  width: 220px;
  min-height: 170px;
  object-fit: scale-down;
`;

const GridName = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & p {
    font-weight: 500;
    font-size: 1.5rem;
    color: #1e1d23;
    margin: 0;
  }
`;

const GridTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0 1rem 0;
`;

const GridPrice = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0;
  color: #1e1d23;
`;

export const ProductButton = styled.a`
  /* margin-top: 6rem;
  margin-bottom: 5rem; */
  background-color: var(--color-brown);
  padding: 1.5rem 3rem;
  color: white;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
  border-radius: 2rem;
`;

const PopularDishesScreen = () => {
  return (
    <div
      style={{
        paddingTop: "12.5rem",
        paddingBottom: "6rem",
        position: "relative",
      }}
    >
      <Heading name={"Popular Dishes"} paragraph={"POPULAR DISHES"}></Heading>

      <div className="categories-buttons">
        <button className="category clicked">ALL CATEGORIES</button>
        <button className="category">PIZZA</button>
        <button className="category">BURGER</button>
        <button className="category">KEBAB</button>
        <button className="category">CHICKEN</button>
      </div>

      <Grid>
        {products.map((product) => (
          <GridItem key={product.id}>
            <GridImage src={`${product.image}`} alt={product.name} />
            <GridName>
              <p>{product.name}</p>
              <Rating value={product.rating} />
            </GridName>
            <GridTitle>{product.title}</GridTitle>
            <GridPrice>PRICE ${product.price}</GridPrice>
          </GridItem>
        ))}
      </Grid>
      <div style={{ textAlign: "center", marginTop: "6rem" }}>
        <ProductButton>SEE ALL PRODUCTS</ProductButton>
      </div>
    </div>
  );
};

export default PopularDishesScreen;
