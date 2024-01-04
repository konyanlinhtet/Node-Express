const lodash = require("lodash")
const arr1 = [1,[2, [3,4]]];
const newArr = lodash.flatMapDeep(arr1)
console.log(newArr)