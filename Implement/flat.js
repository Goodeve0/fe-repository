const isEmpty = (target) => {
  if (Array.isArray(target)) {
    return target.length === 0;
  } else if (target !== null && typeof target === 'object') {
    return Object.keys(target).length === 0;
  }
  return false;
};
let obj = { a: 1, b: 2 };
let obj1 = {};
let arr = [1, null, 2];
console.log(isEmpty(obj), isEmpty(obj1), isEmpty(arr));
