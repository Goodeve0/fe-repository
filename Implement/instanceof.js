const _instanceof = (target, fn) => {
  const prototype = fn.prototype;
  let proto = Object.getPrototypeOf(target);
  while (true) {
    if (proto === null) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
};
