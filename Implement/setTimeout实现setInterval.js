function customSetTimout(fn, time) {
  let intervalID = null;
  function loop() {
    intervalID = setTimeout(() => {
      fn();
      loop();
    }, time);
  }
  loop();
  return () => clearTimeout(intervalID);
}
const interval = customSetTimout(function () {
  console.log('hello world');
}, 1000);

setTimeout(() => {
  interval();
}, 5000);
