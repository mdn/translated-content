---
title: WindowEventHandlers.onpopstate
slug: Web/API/Window/popstate_event
tags:
  - API
  - Event Handler
  - HTML DOM
  - HTML5
  - NeedsSpecTable
  - Property
  - Window
  - events
translation_of: Web/API/WindowEventHandlers/onpopstate
original_slug: Web/API/WindowEventHandlers/onpopstate
---
{{ApiRef}}

{{domxref("WindowEventHandlers")}} 混入（mixin）中的 `onpopstate` 属性是用于处理 window 对象上的 [`popstate`](/zh-CN/docs/Web/API/Window/popstate_event) 事件的[事件处理程序](/zh-CN/docs/Web/Events/Event_handlers)。

每当激活同一文档中不同的历史记录条目时，`popstate` 事件就会在对应的 `window` 对象上触发。如果当前处于激活状态的历史记录条目是由 `history.pushState()` 方法创建的或者是由 `history.replaceState()` 方法修改的，则 `popstate` 事件的 `state` 属性包含了这个历史记录条目的 `state` 对象的一个拷贝。

> **备注：** 调用 `history.pushState()` 或者 `history.replaceState()` 不会触发 `popstate` 事件。`popstate` 事件只会在浏览器某些行为下触发，比如点击后退按钮（或者在 JavaScript 中调用 `history.back()` 方法）。即，在同一文档的两个历史记录条目之间导航会触发该事件。

## 语法

```js
window.onpopstate = funcRef;
```

- `funcRef` 是一个处理函数。

## 示例

假如当前网页地址为 `http://example.com/example.html`，则运行下述代码将触发警告对话框：

```js
window.onpopstate = function(event) {
  alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
};

history.pushState({page: 1}, "title 1", "?page=1");
history.pushState({page: 2}, "title 2", "?page=2");
history.replaceState({page: 3}, "title 3", "?page=3");
history.back(); // 弹出 "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // 弹出 "location: http://example.com/example.html, state: null
history.go(2);  // 弹出 "location: http://example.com/example.html?page=3, state: {"page":3}
```

注意，即便是没有关联 `state` 对象的原始的历史条目（比如 `http://example.com/example.html`），`popstate` 事件也仍会在我们第二次调用 `history.back()`，激活这一历史条目后触发。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("window.history")}}
- [Manipulating the browser history](/zh-CN/docs/Web/API/History_API)
- [Ajax 导航示例](/zh-CN/docs/Web/API/History_API/Example)
