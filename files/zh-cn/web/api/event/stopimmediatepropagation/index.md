---
title: event.stopImmediatePropagation
slug: Web/API/Event/stopImmediatePropagation
---

{{APIRef("DOM")}}

{{domxref("Event")}} 接口的 **`stopImmediatePropagation()`** 方法阻止监听同一事件的其他事件监听器被调用。

如果多个事件监听器被附加到相同元素的相同事件类型上，当此事件触发时，它们会按其被添加的顺序被调用。如果在其中一个事件监听器中执行 `stopImmediatePropagation()` ，那么剩下的事件监听器都不会被调用。

> [!NOTE]
> 注意与 `event.stopPropagation()` 之间的区别

## 语法

```js-nolint
event.stopImmediatePropagation()
```

## 示例

```html
<!doctype html>
<html>
  <head>
    <style>
      p {
        height: 30px;
        width: 150px;
        background-color: #ccf;
      }
      div {
        height: 30px;
        width: 150px;
        background-color: #cfc;
      }
    </style>
  </head>
  <body>
    <div>
      <p>paragraph</p>
    </div>
    <script>
      const p = document.querySelector("p");
      p.addEventListener(
        "click",
        (event) => {
          alert("我是 p 元素上被绑定的第一个监听函数");
        },
        false,
      );

      p.addEventListener(
        "click",
        (event) => {
          alert("我是 p 元素上被绑定的第二个监听函数");
          event.stopImmediatePropagation();
          // 执行 stopImmediatePropagation 方法，阻止 click 事件冒泡，并且阻止 p 元素上绑定的其他 click 事件的事件监听函数的执行。
        },
        false,
      );

      p.addEventListener(
        "click",
        (event) => {
          alert("我是 p 元素上被绑定的第三个监听函数");
          // 该监听函数排在上个函数后面，该函数不会被执行
        },
        false,
      );

      document.querySelector("div").addEventListener(
        "click",
        (event) => {
          alert("我是 div 元素，我是 p 元素的上层元素");
          // p 元素的 click 事件没有向上冒泡，该函数不会被执行
        },
        false,
      );
    </script>
  </body>
</html>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
