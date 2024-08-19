import React, { useEffect, useState } from "react";
import AddRemoveIngredients from "./AddRemoveIngredients"; // Adjust import path as necessary
import { Ingredient } from "./Burger";
import axios from "axios";
import styled from "styled-components";

interface ControlsProps {
  ingredients: Ingredient[];
  setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>;
}

const ControlsDiv = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  background-color: #f8f9fa;
`;

const ControlsHeader = styled.h1`
  font-size: 1.5rem;
  color: #343a40;
  margin-bottom: 20px;
  text-align: center;
`;

const Controls: React.FC<ControlsProps> = ({ ingredients, setIngredients }) => {
  const [error, setError] = useState<string | null>(null);
  const [ingredientsResponse, setIngredientsResponse] = useState<Ingredient[]>(
    []
  );

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get<Ingredient[]>(
          "https://react-interview.xm.com/ingredients",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIngredientsResponse(response.data);
      } catch (error: any) {
        setError(error.message || "Failed to fetch ingredients");
      }
    };
    fetchIngredients();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleIngredientRemoved = (id: number) => {
    const updatedIngredients = ingredients.filter(
      (ingredient) => ingredient.id !== id
    );
    setIngredients(updatedIngredients);
  };

  const handleIngredientAdded = (newIngredient: Ingredient) => {
    setIngredients([...ingredients, newIngredient]);
  };

  const getIngredientCount = (id: number) => {
    return ingredients.filter((ingredient) => ingredient.id === id).length;
  };

  return (
    <ControlsDiv>
      <ControlsHeader>Build Your Burger</ControlsHeader>
      <AddRemoveIngredients
        ingredients={ingredientsResponse}
        onIngredientRemoved={handleIngredientRemoved}
        onIngredientAdded={handleIngredientAdded}
        getIngredientCount={getIngredientCount}
      />
    </ControlsDiv>
  );
};

export default Controls;
