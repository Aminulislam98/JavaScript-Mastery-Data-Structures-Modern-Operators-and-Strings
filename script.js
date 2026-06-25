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

  openingHours: {
    mon: {
      open: 11,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 10,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterMenuIndex, mainMenuIndex, time, address }) {
    // console.log(
    //   `Order receive! ${this.starterMenu[starterMenuIndex]} and ${this.mainMenu[mainMenuIndex]} will be delivered to ${address} at ${time} o'clock. Thank you very much!`,
    // );
  },
  makePaste: function (ing1, ing2, ing3) {
    // console.log(`Enjoy your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};
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

const { name, openingHours, address } = restaurant;

const {
  mon: { open, close },
} = openingHours;
// console.log(open, close);

// spread operator (...)
const arr = [2, 4, 5];
const newArr = [2, 3, ...arr];
// console.table(newArr);
const newMenu = [...restaurant.mainMenu, 'Beef biryani'];
// console.table(newMenu);

// Iterables: arrays, strings, maps, sets, NOT objects
const newRestaurant = { ...restaurant };
newRestaurant.name = 'Aminur era';
// console.log('original', restaurant.name);
// console.log('copy', newRestaurant.name);
restaurant.mainMenu.push('Samasa');
// console.log(restaurant.mainMenu);
// console.log(newRestaurant.mainMenu);

const { sat, ...weekends } = restaurant.openingHours;
// console.log(sat, weekends);

const fiveNum = [2, 3, 4, 4];

const howMany = function (...others) {
  console.log(others);
};
howMany(...fiveNum);
