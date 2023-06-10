# Option 3: Resistor Networks
#### https://edabit.com/challenge/eWXL8Jz78hP5tW644

## Code:

```javascript
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

```

## Explanation I researched on the Internet since this was a new challenging problem for me:

The function resist takes one argument: a nested network as a string. The function returns a number that is the equivalent resistance of the network.

The function uses a stack-based approach to evaluate the nested network. The idea is to break down the network into smaller subnetworks and evaluate them recursively. The function uses two helper functions: series and parallel, that take an array of resistors and return the equivalent resistance of a series or parallel network.

The function works as follows:

First, the function converts the string to an array of tokens. Each token is either an opening or closing parenthesis or bracket, a comma, a space, or a digit or decimal point that is part of a number.
Then, the function initializes an empty stack to store the subnetworks and an empty array to store the current subnetwork.
The function loops through the tokens and does the following:
If the token is an opening parenthesis or bracket, it means that a new subnetwork is starting. The function pushes the current subnetwork to the stack and resets the current subnetwork to an empty array.
If the token is a closing parenthesis, it means that a series subnetwork is ending. The function evaluates the current subnetwork as a series network using the series helper function and stores the result as a number. Then it pops the previous subnetwork from the stack and appends the result to it.
If the token is a closing bracket, it means that a parallel subnetwork is ending. The function evaluates the current subnetwork as a parallel network using the parallel helper function and stores the result as a number. Then it pops the previous subnetwork from the stack and appends the result to it.
If the token is a comma or a space, it means that there is a separator between resistors. The function ignores it and continues to the next token.
Otherwise, the token is part of a number. The function initializes an empty string to store the number and while there are more tokens and they are digits or decimal points, it adds them to the number string and removes them from the tokens array. Then it converts the number string to a number and appends it to the current subnetwork.
After looping through all the tokens, the function returns the result of evaluating the final subnetwork as a series network, rounded to one decimal place.
