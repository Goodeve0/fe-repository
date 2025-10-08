```js
function debounce(fn, delay) {
  let timer = null;
  const _debounce = function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
  return _debounce;
}
```

// v2

```js
function debounce(fn, delay, immediate = false) {
  let timer = null;
  let isInvoke = false;
  const _debounce = function (...args) {
    if (timer) clearTimeout(timer);
    if (immediate && !isInvoke) {
    }
  };
}
```
