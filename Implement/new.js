function myNew(fn, ...args) {
  if (Object.prototype.toString.call(fn) !== '[object Function]') {
    return 'Error in params';
  }
  const obj = {};
  obj.__proto__ = Object.create(fn.prototype);
  let ret = fn.call(obj, ...args);
  return ret instanceof Object ? ret : obj;
}
