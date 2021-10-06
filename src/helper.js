// get difference between vehicle car model & current year
export function getDiffYear(year) {
  return new Date().getFullYear() - year;
}

// get price by branch
export function getIncrementBranch(branch) {
  let increment;

  switch (branch) {
    case "American":
      increment = 1.3;
      break;
    case "European":
      increment = 1.15;
      break;
    case "Asiatic":
      increment = 1.05;
      break;

    default:
      break;
  }

  return increment;
}

// Calc insurance type
export function getIncrementType(type) {
  let increment;

  switch (type) {
    case 'Basic': increment = 1.2;
      break;
    case 'Premium': increment = 1.5;
      break;

    default:
      break;
  }

  return increment;
}
