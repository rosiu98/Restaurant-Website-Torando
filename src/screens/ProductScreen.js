import React from "react";
import PageHero from "../components/PageHero";
import Rating from "../components/Rating";
import { products } from "../products";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import FooterScreen from "./FooterScreen";

const ProductDetails = styled.section`
  padding-top: 12rem;
  padding-bottom: 12rem;
  max-width: 1170px;
  margin: 0 auto;
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr;
`;

const ProductImage = styled.div`
  /* background-color: #faf7f2; */
  border: 3px solid #faf7f2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
`;

const ProductContent = styled.div``;

const ProductTitle = styled.div`
  margin-bottom: 3rem;

  & h1 {
    font-size: 5rem;
    font-family: "Lilita One", cursive;
    color: #1e1d23;
  }

  & p {
    font-size: 17px;
    font-weight: normal;
    line-height: 28px;
    color: #8d8d8d;
    margin-bottom: 15px;
  }

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    color: #706c61;
  }
`;

const ProductPrice = styled.div`
  margin-bottom: 3rem;

  & p {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
    color: #1e1d23;
  }
`;

const ProductButtons = styled.div``;

const ButtonAddToCart = styled.a`
  background-color: var(--color-yellow);
  padding: 1.5rem 3rem;
  color: white;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
  border-radius: 2rem;
  transition: 0.2s all;

  &:hover {
    background-color: var(--color-brown);
  }
`;

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p.id === Number(match.params.id));

  return (
    <div>
      <Navbar />
      <PageHero title={product.name} product name={"PRODUCT DETAILS"} />
      <ProductDetails>
        <ProductImage>
          <img src={`/${product.image}`} alt={product.name} />
        </ProductImage>
        <ProductContent>
          <ProductTitle>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <ul>
              <li>Great feature with amzing</li>
              <li>sound 100% new trend with much more</li>
              <li>color Unlimited guarantee</li>
            </ul>
          </ProductTitle>
          <ProductPrice>
            <p>${product.price}.99</p>
            <Rating
              value={product.rating}
              text={`${product.numReviews} Reviews`}
            />
          </ProductPrice>
          <ProductButtons>
            <ButtonAddToCart>ADD TO CART</ButtonAddToCart>
          </ProductButtons>
        </ProductContent>
      </ProductDetails>
      <FooterScreen />
    </div>
  );
};

export default ProductScreen;
