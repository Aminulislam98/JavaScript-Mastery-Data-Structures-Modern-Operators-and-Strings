'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Brochette', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },
// };

// Destructuring array

// const restaurant = {
//   name: 'Spice Garden',
//   location: 'London, United Kingdom',
//   categories: ['Indian', 'Asian', 'Vegetarian'],
//   starterMenu: ['Garlic Bread', 'Tomato Soup', 'Spring Rolls', 'Chicken Wings'],
//   mainMenu: [
//     'Chicken Biryani',
//     'Butter Chicken',
//     'Paneer Curry',
//     'Vegetable Fried Rice',
//   ],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };
// const [starter, main] = restaurant.order(0, 1);
// console.log(starter, main);

// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Nested array

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k)

// assignment

// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: [
//       'computer science',
//       'programming',
//       'algorithms',
//       'data structures',
//       'java',
//       'math',
//       'software',
//       'engineering',
//     ],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: [
//       'Harold Abelson',
//       'Gerald Jay Sussman',
//       'Julie Sussman (Contributor)',
//     ],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: [
//       'computer science',
//       'programming',
//       'javascript',
//       'software',
//       'engineering',
//     ],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Computer Systems: A Programmer's Perspective",
//     author: ['Randal E. Bryant', "David Richard O'Hallaron"],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: [
//       'computer science',
//       'computer systems',
//       'programming',
//       'software',
//       'C',
//       'engineering',
//     ],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: [
//       'computer science',
//       'operating systems',
//       'programming',
//       'software',
//       'C',
//       'Java',
//       'engineering',
//     ],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65,
//       },
//     },
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090,
//       },
//     },
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: [
//       'computer science',
//       'compilers',
//       'engineering',
//       'interpreters',
//       'software',
//       'engineering',
//     ],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0,
//       },
//     },
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808,
//       },
//     },
//     highlighted: true,
//   },
// ];

// let location = 'gagli';
// assignment 1.1 passed
// const [firstBook, secondBook] = books;
// console.log('firstBook:', firstBook, 'secondBook:', secondBook);

// assignment 1.2 passed
// const [, , thirdBook] = books;
// console.log('thirdBook:', thirdBook);

// assignment 1.3 passed
// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const rating = ratings[0];
// const ratingsCount = ratings[1];

// console.log('rating:', rating);
// console.log('ratingsCount:', ratingsCount);
// const [[, rating], [, ratingsCount]] = ratings;
// console.log('rating:', rating, 'ratingsCount:', ratingsCount);

// assignment 1.4 passed
// const ratingStars = [63405, 1808];
// const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] =
// ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// Destructuring Object ;
// const restaurant = {
//   name: 'Spice Garden',
//   address: 'London, United Kingdom',
//   categories: ['Indian', 'Asian', 'Vegetarian'],

//   starterMenu: ['Garlic Bread', 'Tomato Soup', 'Spring Rolls', 'Chicken Wings'],

//   mainMenu: [
//     'Chicken Biryani',
//     'Butter Chicken',
//     'Paneer Curry',
//     'Vegetable Fried Rice',
//   ],

//   openingHours: {
//     mon: {
//       open: 11,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 10,
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({ starterMenuIndex, mainMenuIndex, time, address }) {
//     console.log(
//       `Order receive! ${this.starterMenu[starterMenuIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered to ${address} at ${time} o'clock. Thank you very much!`,
//     );
//   },
//   makePaste: function (ing1, ing2, ing3) {
//     console.log(`Enjoy your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// restaurant.orderPizza('Mushroom');
// const ingredients = [
//   prompt('How would you like to make pasta? ingredient 1 ? '),
//   prompt('How would you like to make pasta? ingredient 2 ? '),
//   prompt('How would you like to make pasta? ingredient 3 ? '),
//   ,
// ];
// restaurant.makePaste(...ingredients);
// restaurant.orderDelivery({
//   time: 12,
//   address: 'Lavender vale, 21',
//   starterMenuIndex: 1,
//   mainMenuIndex: 0,
// });

// const { openingHours } = restaurant;
// console.table(openingHours);

// const {
//   name: restaurantName,
//   categories: restaurantCategories,
//   address: restaurantAddress,
// } = restaurant;
// console.log(restaurantName, restaurantCategories, restaurantAddress);

// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// Mutating variable ;
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);

// const { name, openingHours, address } = restaurant;

// const {
//   mon: { open, close },
// } = openingHours;
// console.log(open, close);

// spread operator (...)
// const arr = [2, 4, 5];
// const newArr = [2, 3, ...arr];
// console.table(newArr);
// const newMenu = [...restaurant.mainMenu, 'Beef biryani'];
// console.table(newMenu);

// Iterables: arrays, strings, maps, sets, NOT objects
// const newRestaurant = { ...restaurant };
// newRestaurant.name = 'Aminur era';
// console.log('original', restaurant.name);
// console.log('copy', newRestaurant.name);
// restaurant.mainMenu.push('Samasa');
// console.log(restaurant.mainMenu);
// console.log(newRestaurant.mainMenu);

// const { sat, ...weekends } = restaurant.openingHours;
// console.log(sat, weekends);

// const fiveNum = [2, 3];

// const howMany = function (...others) {
//   let total = 0;

//   for (let i = 0; i < others.length; i++) total += others[i];
// console.log(total);
// };
// howMany(...fiveNum);

// const check = [2, 3, 4];

// const { sat, ...weekends } = restaurant.openingHours;
// const [, , third, ...others] = check;
// console.log(sat, 'this is weekends:', weekends);
// console.log('others', others);

// console.log(window);
// Short circuiting (&& and ||)
// Use any data type, return any data type, short-circuiting
// OR operator always gives truthy value
// JavaScript has 6 falsy value: 0 , '' , false, undefined, null nan
// console.log(3 || 'aminul');
// console.log(0 || 'aminul');
// The nullish Coalescing Operator , it is introduced in 2020

// restaurant.numGuest = 0;
// const guest = restaurant.numGuest || 10;

// console.log(guest);

// const newGuest = restaurant.numGuest ?? 10;
// Nullish coalescing : undefined , null (NOT 0 or '')
// console.log(newGuest);

// Logical assignment operator

// const rest1 = {
//   resName: 'Capri',
//   numGuest: 0,
// };

// const rest2 = {
//   resName: 'Capri',
//   owner: 'Aminul',
// };

// OR assignment operator
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.newGuest || 10;

// console.log('it has already numGuest', rest1.numGuest);
// console.log('it does not have numGuest', rest2.numGuest);

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// console.log('it has already numGuest', rest1.numGuest);
// console.log('it does not have numGuest', rest2.numGuest);

// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// console.log(rest1.owner);
// console.log(rest2.owner);

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// const rest1 = {
//   resName: 'Capri',
//   numGuest: 0,
// };

// const rest2 = {
//   resName: 'Capri',
//   owner: 'Aminul',
// };
// OR Assignment operator
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// Nullish Assignment operator(the value will assign if value is undefined or null)
// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

// And Assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log('firstRes', rest1);
// console.log('secondRest', rest2);

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// 1
// const [player1, player2] = game.players;

// // 2
// const [gk, ...fieldPlayers] = player1;

// // 3
// const allPlayers = [...player1, player2];

// // 4
// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];

// 5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// 6
// const printGoals = function (...rest) {
//   for (let i = 0; i < rest.length; i++) {
// console.log(rest[i]);
// }
// console.log(`${rest.length} goals were Scored`);
// };
// printGoals(...game.scored);

// 7
// team1 < team2 && console.log('team 1 is likely to win');
// team1 > team2 && console.log('team 2 is likely to win');

//
// const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Looping ARRAYS: The for-of loop;
// const restaurant = {
//   name: 'Spice Garden',
//   address: 'London, United Kingdom',
//   categories: ['Indian', 'Asian', 'Vegetarian'],

//   starterMenu: ['Garlic Bread', 'Tomato Soup', 'Spring Rolls', 'Chicken Wings'],

//   mainMenu: [
//     'Chicken Biryani',
//     'Butter Chicken',
//     'Paneer Curry',
//     'Vegetable Fried Rice',
//   ],

//   openingHours: {
//     [weekDays[3]]: {
//       open: 11,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery({ starterMenuIndex, mainMenuIndex, time, address }) {
//     // console.log(
//     //   `Order receive! ${this.starterMenu[starterMenuIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered to ${address} at ${time} o'clock. Thank you very much!`,
//     // );
//   },
//   makePaste(ing1, ing2, ing3) {
//     // console.log(`Enjoy your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     // console.log(mainIngredient);
//     // console.log(otherIngredients);
//   },
// };

// const menu = [...restaurant.mainMenu, 12];
// const num = [3, 4, 5, 6, 6];
// for (const item of menu) console.log(item);
// for (const [i, el] of menu.entries()) {
//   // console.log(`${i + 1}: ${el}`);
// }

// Enhance Object literals
// compute means calculate

// const [firstDays, ...resDays] = weekDays;
// console.log(resDays);
// const user = {
//   name: {
//     open: 12,
//     closed: 10,
//   },
// };
// const firstName = user.lastName.open;
// console.log(firstName);

// for (const day of weekDays) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
// console.log(`On ${day}, we are ${open}`);
// }

// console.log(restaurant.orders?.(2, 0) ?? 'Method does not exist.');

// const user = [{ firstName: 'Aminul', age: 23 }, { age: 23 }];
// console.log(user[0]?.firstName ?? 'User not exist');

// const user = [{ firstName: 'Aminul', age: 23 }, { age: 23 }];
// console.log(user[1]?.firstName ?? 'User not exist');
// Looping Object: Object keys, and Entries

// getting all keys form object through using Object.key() method
// const properties = Object.keys(weekDays);
// console.log(properties);

// getting all value form object through using Object.value() method
// const values = Object.values(weekDays);
// console.log(values);

// getting all entires(property) form object through using Object.entries() method

//  openingHours: {
//     [weekDays[3]]: {
//       open: 11,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },

// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day}, we open at ${open} and closed at ${close}`);
// }

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const restaurant = {
  name: 'Spice Garden',
  address: 'London, United Kingdom',
  categories: ['Indian', 'Asian', 'Vegetarian'],

  starterMenu: ['Garlic Bread', 'Tomato Soup', 'Spring Rolls', 'Chicken Wings'],

  mainMenu: [
    'Chicken Biryani',
    'Butter Chicken',
    'Paneer Curry',
    'Vegetable Fried Rice',
  ],

  // নতুন: প্রতিটা dish এর দাম (£ এ)
  prices: {
    'Garlic Bread': 4,
    'Tomato Soup': 5,
    'Spring Rolls': 6,
    'Chicken Wings': 8,
    'Chicken Biryani': 12,
    'Butter Chicken': 11,
    'Paneer Curry': 10,
    'Vegetable Fried Rice': 9,
  },

  // নতুন: staff এর তথ্য (nested object সহ)
  staff: {
    chef: { name: 'Rahim', experience: 12, speciality: 'Biryani' },
    waiter: { name: 'Karim', experience: 4, speciality: 'Service' },
    manager: { name: 'Fatima', experience: 8, speciality: 'Operations' },
  },

  // নতুন: রিভিউ (array of objects)
  reviews: [
    { customer: 'Anik', rating: 5, comment: 'Amazing food!' },
    { customer: 'Bushra', rating: 4, comment: 'Good but slow service' },
    { customer: 'Chowdhury', rating: 3, comment: 'Average experience' },
    { customer: 'Dipa', rating: 5, comment: 'Best biryani in London' },
  ],

  openingHours: {
    [weekDays[3]]: { open: 11, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

// problem 1
// for (const [index, player] of game.scored.entries()) {
//   // console.log(`Goal ${index + 1}: ${player}`);
// }

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

// const odds = Object.values(game.odds);
// let totalScore = 0;
// for (const num of odds) {
//   totalScore += num;
// }
// totalScore /= odds.length;
// console.log(`Average odd is: ${totalScore}`);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw").

// for (const [team, num] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'Draw' : `Victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} : ${num}`);
// }

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// }

// const scorers = {};

// for (const player of game.scored) {
//   if (scorers[player]) {
//     scorers[player]++;
//   } else {
//     scorers[player] = 1;
//   }
// }
// console.table(scorers);

// lecture sets;
const newSet = new Set(['Banana', 'Apple', 'Orange', 'Strawberry', 'Banana']);

newSet.add('Mango');
newSet.delete('Mango');
// newSet.clear();
// console.log(newSet.size);
// for (const item of newSet) {
//   console.log(item);
// }

// console.log([...newSet]);
// const staff = ['manager', 'chef', 'waiter', 'chef', 'manager'];
// console.log(staff);
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set('aminul'));

// New operation to make set useful

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log('Intersection', commonFoods);
// console.log([...commonFoods]);

// intersection method is , this method takes the same value from 2 set of collection and make a new set collection,

// what is union method : union method take all unique value form 2 set of collection and make new set collection

// union method
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(italianMexicanFusion);

// difference method : difference return the elements that are in the first set but not in the second set as in a new set

// const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
// console.log(uniqueItalianFoods);

const uniqueItaAndMex = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItaAndMex);
