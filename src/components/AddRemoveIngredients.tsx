import React from "react";
import styled from "styled-components";
import { Ingredient } from "./Burger";
import { capitalizeFirstChar } from "./utils/utils";
import { Flex } from "./Flex";

interface AddRemoveIngredientsProps {
  ingredients: Ingredient[];
  onIngredientRemoved: (id: number) => void;
  onIngredientAdded: (ingredient: Ingredient) => void;
  getIngredientCount: (id: number) => number;
}

const IngredientWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
`;

const IngredientControl = styled.div`
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 270px;

  .Label {
    font-weight: bold;
    flex-grow: 1;
  }

  button {
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 5px;

    &.Remove {
      background-color: #f44336;
      color: white;

      &:hover {
        background-color: #d32f2f;
      }

      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
    }

    &.Add {
      background-color: #4caf50;
      color: white;

      &:hover {
        background-color: #388e3c;
      }
    }
  }
`;

const AddRemoveIngredients: React.FC<AddRemoveIngredientsProps> = ({
  ingredients,
  onIngredientRemoved,
  onIngredientAdded,
  getIngredientCount,
}) => {
  return (
    <IngredientWrapper>
      {ingredients.map((ingredient) => (
        <IngredientControl key={ingredient.id}>
          <div className="Label">{capitalizeFirstChar(ingredient.name)}</div>
          <Flex gap="10px">
            <button
              className="Remove"
              onClick={() => onIngredientRemoved(ingredient.id)}
              disabled={getIngredientCount(ingredient.id) === 0}
            >
              Remove
            </button>
            <button
              className="Add"
              onClick={() => onIngredientAdded(ingredient)}
            >
              Add
            </button>
          </Flex>
        </IngredientControl>
      ))}
    </IngredientWrapper>
  );
};

export default AddRemoveIngredients;
