---
title: Event.cancelBubble
slug: Web/API/Event/cancelBubble
---

{{APIRef("DOM Events")}}

**`Event.cancelBubble`** 属性是 {{domxref("Event.stopPropagation()")}}的一个曾用名。在从事件处理程序返回之前将其值设置为 true 可阻止事件的传播。

## 语法

```
event.cancelBubble = bool;
let bool = event.cancelBubble;
```

## 用例

```js
ele.onclick = function (e) {
  // 在这儿可以做点儿有趣的事情
  e.cancelBubble = true;
};
```

## 规范

_这个属性的规范并未统一。_ 因为他还有其他标准 W3C 版： [an old Working Draft of W3C DOM Level 2](http://www.w3.org/TR/1999/WD-DOM-Level-2-19990304/events.html#attribute-cancelBubble). 微软版： [description of it on MSDN](<https://msdn.microsoft.com/en-us/library/ms533545(v=vs.85).aspx>).

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("UIEvent.cancelBubble")}}
- translated by cnvoid
