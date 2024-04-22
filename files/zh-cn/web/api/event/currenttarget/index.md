---
title: Event.currentTarget
slug: Web/API/Event/currentTarget
---

{{APIRef("DOM")}}

{{domxref("Event")}} 接口的只读属性 **`currentTarget`** 表示的，标识是当事件沿着 DOM 触发时事件的当前目标。它总是指向事件绑定的元素，而 {{domxref("Event.target")}} 则是事件触发的元素。

## 语法

```plain
var currentEventTarget = event.currentTarget;
```

### Value

{{domxref("EventTarget")}}

## 例子

当将相同的事件处理程序附加到多个元素时 `event.currentTarget` 就很有用。

```js
function hide(e) {
  e.currentTarget.style.visibility = "hidden";
  console.log(e.currentTarget);
  // 该函数用作事件处理器时：this === e.currentTarget
}

var ps = document.getElementsByTagName("p");

for (var i = 0; i < ps.length; i++) {
  // console: 打印被点击的 p 元素
  ps[i].addEventListener("click", hide, false);
}
// console: 打印 body 元素
document.body.addEventListener("click", hide, false);
```

> **备注：** `event.currentTarget` 的值*只能*在事件处理过程中被使用。如果你尝试用 {{DOMxRef("console.log()")}} 在控制台打印 `event` 对象，你会发现 `currentTarget` 的值是 `null`。如果你想在控制台打印 `currentTarget` 的值，你应该使用 `console.log(event.currentTarget)`，或者也可以在代码中使用 [`debugger`](/zh-CN/docs/Web/JavaScript/Reference/Statements/debugger) 语句来暂停代码的执行从而看到 `event.currentTarget` 的值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [Comparison of Event Targets](/zh-CN/docs/Web/API/Event/Comparison_of_Event_Targets)
