export const capitalizeFirstChar = (str: string): string => {
  if (!str) return ""; // Check if the string is empty, null, or undefined
  return str.charAt(0).toUpperCase() + str.slice(1);
};
