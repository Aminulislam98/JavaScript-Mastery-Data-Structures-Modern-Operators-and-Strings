'use strict';
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
    [weekDays[3]]: { open: 1, close: 21 },
    fri: { open: 5, close: 11 },
    sat: { open: 4, close: 10 },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//১. Easy
const staffEntries = Object.entries(restaurant?.staff);
for (const [rule, { name, experience }] of staffEntries) {
  console.log(`${rule} is ${name} with ${experience} of experience`);
}

// ২. Medium
for (const { customer, rating, comment } of restaurant.reviews) {
  console.log(`${customer} gave ${rating} starts: "${comment}"`);
}

// ৩. Hard
let totalNum = 0;
let totalLength = 0;

for (const { rating } of restaurant.reviews) {
  totalNum += rating;
  totalLength++;
}

const averageRating = totalNum / totalLength;
console.log(`Average ratings: ${averageRating}`);

// ৪. Very Hard
const prices = Object.entries(restaurant.prices);
let totalPrice = 0;
for (const item of restaurant?.mainMenu) {
  let price = restaurant?.prices[item];
  console.log(`${item} costs £${price}`);
  totalPrice += price;
}
console.log(`Total price of all main dishes: ${totalPrice}`);

// ৫. Extremely Hard
let maxOpenHour = 0;
let openingHour = 0;
let longestDay = '';
const openingHours = Object.entries(restaurant?.openingHours);
for (const [day, { open, close }] of openingHours) {
  let openHour = close - open;
  if (openHour > 12) {
    console.log(
      `On ${day}, we are open for ${openHour} hours — that's a long day!`,
    );
  }

  if (maxOpenHour < openHour) {
    maxOpenHour = openHour;
    longestDay = day;
  }
}
console.log(`Longest opening day: ${longestDay} (${maxOpenHour} hours)`);
