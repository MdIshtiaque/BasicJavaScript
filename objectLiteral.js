/**
 *
 * Object Literal
 */

let config = {
  cpu : "Amd Ryzen 5 3600",
  memory : "16GB",
  storage : "1TB",
  gpu : "Nvidia GeForce GTX 1080 Ti",
  os : "Windows 10"
}

console.log(config);
console.log(config.os);
console.log('config :>>', config);

/**
 * Get own property name of the object => return array
 */

console.log(Object.getOwnPropertyNames(config));
console.log(Object.keys(config));


/**
 * Change properties of the object
 */

config.cpu = "Amd Ryzen 7 3700";
config.gpu = "Nvidia GeForce GTX 1080 Ti";

console.log(config);

Object.defineProperty(config, "cpu", {value: 'Intel core i9'});

console.log(config);


/**
 * iterate keys in the object
 */
let keys = Object.keys(config);
keys.forEach(keys => {
  console.log(keys);
});



/***
 * iterate key values in the object
 */
for(const key in config) {
  console.log(`${key} : ${config[key]}`);
}

