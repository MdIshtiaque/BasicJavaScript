let framwork = ['Laravel', 'vue js'];

console.log(framwork.length);

/**
 * push --- insert last
 */

framwork.push('React');
console.log(framwork);

/**
 * unshift ---- insert first
 */

framwork.unshift('Angular', 'NativePhp');
console.log(framwork);

/*** Eject Entry
 *
 * pop ------- eject the last
 * shift ----- eject the first
 */

framwork.pop();
console.log(framwork);

framwork.shift();
console.log(framwork);

/***
 * array Concate
 */
let database = ['mysql', 'firebase', 'postgres', 'mongoDB'];

console.log(framwork.concat(database));

/**
 * includes --- check element exist
 */

console.log(database.includes('php'));

/**
 * Array Map  --- Specific Callback Function run for each element in the array
 */

let games = ['Fifa', 'Valorant', 'COD', 'Pes'];

let map = games.map((element) => element + ' - Array Mapped');

console.log(map);

/**
 * Array Filter -- Filter array based on a given condition applied to each element
 */

let filter = ['100', '2323', '0000', '87687', '8766', '98732'];

console.log(filter.filter((element) => element > 80000));

/**
 * find -- Returns the value of the first element in the array where predicate is true, and undefined otherwise
 */

console.log(filter.find((element) => element > 80000));

/**
 * Array every ----- Determines whether all the members of an array satisfy the specified test.
 */

console.log(filter.every((element) => element > -1));

/***
 * findIndex  --- same as find but returns the index of the first element.
 */

console.log(filter.findIndex(element => element > 80000));

/**
 * Array Reduce ---- (Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.)
 */
let num = [1, 2, 3, 4, 5];
console.log(num.reduce( (prev, curr) => prev+curr, 1));


/**
 * Array Splice ----- Delete elements from the array.
 */

console.log(num.splice(0, 2));
console.log(num);


/**
 * Array slice -----  Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
 */

console.log(database.slice(0, 2));
