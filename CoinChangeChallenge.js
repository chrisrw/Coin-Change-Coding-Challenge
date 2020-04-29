const CoinChange = (price, coins) => {
  //reduce coins array down to a single value
  const reducer = (a, b) => a + b;
  let coinValue = coins.reduce(reducer);
  //subtract coin value by price by price
  let cents = coinValue - price;
  //find out how many of each denomination can go into the cents value. Subtract the value as you switch denominations.
  let quarters = Math.floor(cents / 25);
  cents = cents - 25 * quarters;
  let dimes = Math.floor(cents / 10);
  cents = cents - 10 * dimes;
  let nickels = Math.floor(cents / 5);
  cents = cents - 5 * nickels;
  let pennies = cents;
  //if you want to get the value back as an array, we can push the values into an empty array and then console.log it.
  let change = [];
  change.push(
    `Pennies ${pennies}, Nickels: ${nickels}, Dimes: ${dimes}, Quarters: ${quarters}`
  );
  console.log(
    `Pennies: ${pennies}, Nickels: ${nickels}, Dimes: ${dimes}, Quarters: ${quarters}`
  );
  console.log(change);
};

CoinChange(100, [25, 25, 25, 25, 25, 5, 5, 5, 10, 1, 1, 5, 10, 10, 5, 10]);
