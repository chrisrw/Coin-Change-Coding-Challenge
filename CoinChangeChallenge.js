
//Given the price of an item and the coins you will use to pay for said item, calculate the most efficient combination of change you would get back from your purchase. 
//Example: CoinChange(1.00, [.25, .25, .25, .25, .25, .05]); SHOULD RETURN [`Pennies: 0, Nickels: 1, Dimes: 0, Quarters: 1`] OR Pennies: 0, Nickels: 1, Dimes: 0, Quarters: 1


const CoinChange = (price, coins) => {
  //multiply price and coins by 100 so you can use Math.floor
  let newPrice = price * 100
  let newCoins = coins.map(function (x) { return x * 100; });
  //reduce coins array down to a single value
  const reducer = (a, b) => a + b;
  let coinValue = newCoins.reduce(reducer);
  //subtract coin value by price by price
  let cents = coinValue - newPrice;
  //find out how many of each denomination can go into the cents value. Subtract the value as you switch denominations.
  let quarters = Math.floor(cents / 25);
  cents = cents - 25 * quarters;
  let dimes = Math.floor(cents / 10);
  cents = cents - 10 * dimes;
  let nickels = Math.floor(cents / 5);
  cents = cents - 5 * nickels;
  let pennies = cents;
  //if you want to get the value back as an array, we can push the values into an empty array and then console.log it.
  //if you want decimal values, divide 
  let change = [];
  change.push(
    `Pennies: ${pennies}, Nickels: ${nickels}, Dimes: ${dimes}, Quarters: ${quarters}`
  );
  console.log(
    `Pennies: ${pennies}, Nickels: ${nickels}, Dimes: ${dimes}, Quarters: ${quarters}`
  );
  console.log(change);

};

CoinChange(1.00, [.25, .25, .25, .25, .25, .05]);


