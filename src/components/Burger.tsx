import { useState } from "react";
import Controls from "./Controls";
import Ingredient from "./Ingredient";
import { Flex } from "./Flex";
import styled from "styled-components";
import RedirectOnTokenExpiration from "./RedirectOnTokenExpiration";

export interface Ingredient {
  id: number;
  name: string;
  src: string;
}

const StyledBurger = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }
`;

const Burger = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  return (
    <Flex gap="10px">
      <RedirectOnTokenExpiration />
      <Controls ingredients={ingredients} setIngredients={setIngredients} />
      <StyledBurger>
        <Ingredient type={"bun_top.png"} />
        {ingredients.map((i) => (
          <Ingredient type={i.src} />
        ))}
        <Ingredient type={"bun_bottom.png"} />
      </StyledBurger>
    </Flex>
  );
};

export default Burger;
