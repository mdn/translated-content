---
title: event.bubbles
slug: Web/API/Event/bubbles
---

{{ ApiRef() }}

### 概述

返回一个布尔值，表明当前事件是否会向 DOM 树上层元素冒泡。

### 语法

```plain
var bool = event.bubbles;
```

### 备注

一些特定的事件类型会冒泡。这时，该事件对象的`bubbles`属性为`true`. 你可以检查该属性的值来判断一个事件对象是否冒泡。

### 例子

```js
function goInput(e) {
  // 检查事件对象是否冒泡
  if (!e.bubbles) {
    // 如果不冒泡，则手动传递事件
    passItOn(e);
  }
  // 如果冒泡的话
  doOutput(e);
}
```

### 规范

[event.bubbles](http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-event-bubbles)
