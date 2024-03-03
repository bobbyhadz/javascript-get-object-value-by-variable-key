// EXAMPLE 1 - Get an Object's Value using a Variable Key in JavaScript

const obj = {
  country: 'Chile',
  name: 'bobby hadz',
};

// ✅ Get object value by variable key
const myVar = 'country';
console.log(obj[myVar]); // 👉️ "Chile"

// ✅ Set object key by variable
const num = 4;
obj['myKey' + num] = 'someValue';
console.log(obj.myKey4); // 👉️ "someValue"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get an object's value using an expression

// const obj = {
//   country: 'Chile',
//   name: 'bobby hadz',
// };

// const myVar = 'c';
// console.log(obj[myVar + 'ountry']); // 👉️ "Chile"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Setting object keys by using a variable

// const obj = {
//   country: 'Chile',
//   name: 'bobby hadz',
// };

// const myVar = 'age';

// obj[myVar] = 30;
// console.log(obj[myVar]); // 👉️ 30

// ------------------------------------------------------------------

// // EXAMPLE 4 - Access an Object Property with a Hyphen or Space in JavaScript

// const obj = {
//   'with-hyphen': 'value1',
//   'with space': 'value2',
//   'with.symbol': 'value3',
//   '123hello': 'value4',
// };

// console.log(obj['with-hyphen']); // 👉️ "value1"
// console.log(obj['with space']); // 👉️ "value2"
// console.log(obj['with.symbol']); // 👉️ "value3"
// console.log(obj['123hello']); // 👉️ "value4"

// ------------------------------------------------------------------

// // EXAMPLE 5 - Use bracket notation when the key is stored in a variable

// const obj = {
//   country: 'Chile',
// };

// const key = 'country';

// console.log(obj[key]); // 👉️ "Chile"

// ------------------------------------------------------------------

// // EXAMPLE 6 - Using dot notation where possible and bracket notation where necessary

// const obj = {
//   person: {
//     'first name': 'Bobby',
//   },
// };
// console.log(obj.person['first name']); // 👉️ "Tom"

// obj.person['first name'] = 'Alice';

// console.log(obj); // 👉️ { person: { 'first name': 'Alice' } }
