function customSetTimeout(fn, time) {
  let intervalID = null;
  function loop() {
    intervalID = setTimeout(() => {
      fn();
      loop();
    }, time);
  }
}
