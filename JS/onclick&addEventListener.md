元素绑定`onclick`和`addEventListener`的区别

1. 事件绑定数量不同
   - `onclick`只能绑定一个事件处理函数，后绑定的会覆盖前面的。
   - `addEventListener`可以给同一个元素绑定多个事件处理函数，按绑定顺序依次执行。
2. 事件类型支持
   - `onclick`只能绑定冒泡阶段的事件，无法指定捕获阶段。
   - `addEventListener`第三个参数（或 { capture: true }）可以指定事件是在捕获阶段还是冒泡阶段执行
3. 事件移除
   - `onclick`只能通过 element.onclick = null 移除。
   - `addEventListener`可以通过 removeEventListener 精确移除指定的监听函数
4. 兼容性
   - `onclick`兼容性最好，所有浏览器都支持。
   - `addEventListener`在 IE9+ 才支持，低版本 IE 用 attachEvent。
