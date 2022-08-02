---
title: GlobalEventHandlers.onload
slug: conflicting/Web/API/Window/load_event
tags:
  - DOMContentLoaded
  - ES6
  - GlobalEventHandlers.onload
  - load
  - onload
translation_of: Web/API/GlobalEventHandlers/onload
original_slug: Web/API/GlobalEventHandlers/onload
---
{{ApiRef()}}

{{domxref("GlobalEventHandlers")}} 混入（mixin）的 **`onload`** 属性是一个[事件处理程序](/zh-CN/docs/Web/Events/Event_handlers)，用于处理 {{domxref("Window")}}、{{domxref("XMLHttpRequest")}}、{{htmlelement("iframe")}} 和 {{htmlelement("img")}} 等元素的 {{domxref("Window/load_event", "load")}} 事件。

`load` 事件在给定的资源加载完成时触发。

## 语法

```js
target.onload = functionRef;
```

### 值

`functionRef` 是窗口 `load` 事件触发时调用的处理函数。

### 示例

```js
window.onload = function() {
  init();
  doSomethingElse();
};
```

```html
<!doctype html>
<html>
  <head>
    <title>onload test</title>
    // ES5
    <script>
      function load() {
        console.log("load event detected!");
      }
      window.onload = load;
    </script>
    // ES2015
    <script>
      const load = () => {
        console.log("load event detected!");
      }
      window.onload = load;
    </script>
  </head>
  <body>
    <p>The load event fires when the document has finished loading!</p>
  </body>
</html>
```

## 注意

在文档加载完成后会触发 `load` 事件。此时，在文档中的所有对象都在 DOM 中，所有图片、脚本、链接以及子框都加载完成了。

同时也会有 [DOM 事件](/zh-CN/docs/Web/Events)，如 `DOMContentLoaded` 和 `DOMFrameContentLoaded`（它们可以使用 {{domxref("EventTarget.addEventListener()")}} 来处理），这些事件在页面 DOM 构建起来后就会触发，而不会等到其它的资源都加载完成。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window/load_event", "load")}} 事件
- {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}} 事件
- {{glossary("IIFE", "立即调用函数表达式（IIFE）")}}
