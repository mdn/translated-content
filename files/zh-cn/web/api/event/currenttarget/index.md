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
function hide(e){
  e.currentTarget.style.visibility = "hidden";
  console.log(e.currentTarget);
  // 该函数用作事件处理器时：this === e.currentTarget
}

var ps = document.getElementsByTagName('p');

for(var i = 0; i < ps.length; i++){
  // console: 打印被点击的 p 元素
  ps[i].addEventListener('click', hide, false);
}
// console: 打印 body 元素
document.body.addEventListener('click', hide, false);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [Comparison of Event Targets](/zh-CN/docs/Web/API/Event/Comparison_of_Event_Targets)
