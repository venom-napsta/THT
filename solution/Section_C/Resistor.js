// My Javascript Solution

// A helper function that evaluates a series network
function series(network) {
  // Initialize the total resistance to zero
  let total = 0;
  // Loop through the resistors in the network
  for (let resistor of network) {
    // Add the resistor value to the total resistance
    total += resistor;
  }
  // Return the total resistance
  return total;
}

// A helper function that evaluates a parallel network
function parallel(network) {
  // Initialize the reciprocal of the total resistance to zero
  let reciprocal = 0;
  // Loop through the resistors in the network
  for (let resistor of network) {
    // Add the reciprocal of the resistor value to the reciprocal of the total resistance
    reciprocal += 1 / resistor;
  }
  // Return the reciprocal of the reciprocal of the total resistance
  return 1 / reciprocal;
}

// The main function that takes a nested network as a string
function resist(network) {
  // Convert the string to an array of tokens
  let tokens = [...network];
  // Initialize an empty stack to store the subnetworks
  let stack = [];
  // Initialize an empty array to store the current subnetwork
  let current = [];
  // Loop through the tokens
  for (let token of tokens) {
    // If the token is an opening parenthesis or bracket
    if (token === "(" || token === "[") {
      // Push the current subnetwork to the stack
      stack.push(current);
      // Reset the current subnetwork to an empty array
      current = [];
    }
    // If the token is a closing parenthesis
    else if (token === ")") {
      // Evaluate the current subnetwork as a series network and store the result as a number
      let result = series(current);
      // Pop the previous subnetwork from the stack and append the result to it
      current = stack.pop();
      current.push(result);
    }
    // If the token is a closing bracket
    else if (token === "]") {
      // Evaluate the current subnetwork as a parallel network and store the result as a number
      let result = parallel(current);
      // Pop the previous subnetwork from the stack and append the result to it
      current = stack.pop();
      current.push(result);
    }
    // If the token is a comma or a space
    else if (token === "," || token === " ") {
      // Ignore it and continue to the next token
      continue;
    }
    // Otherwise, assume the token is part of a number
    else {
      // Initialize an empty string to store the number
      let number = "";
      // While there are more tokens and they are digits or decimal points
      while (tokens.length > 0 && (tokens[0].match(/\d/) || tokens[0] === ".")) {
        // Add the token to the number string and remove it from the tokens array
        number += tokens.shift();
      }
      // Convert the number string to a number and append it to the current subnetwork
      current.push(Number(number));
    }
  }

  // Return the result of evaluating the final subnetwork as a series network, rounded to one decimal place
  return Math.round(series(current) * 10) / 10;
}