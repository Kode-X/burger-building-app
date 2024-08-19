import styled from "styled-components";

export interface IngredientProps {
  type: string;
}

const OverlappingImage = styled.img`
  display: block;
  width: 260px;
  margin-top: -20px;

  &:first-child {
    margin-top: 0;
  }
`;

const Ingredient: React.FC<IngredientProps> = ({ type }) => {
  return (
    <OverlappingImage
      src={`https://react-interview.xm.com/img/${type}`}
      alt={type}
    />
  );
};

export default Ingredient;
