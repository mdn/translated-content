---
title: TouchEvent.changedTouches
slug: Web/API/TouchEvent/changedTouches
---

{{ ApiRef() }}

### 概述

这个 {{ domxref("TouchList") }} 对象列出了和这个触摸事件对应的 {{ domxref("Touch") }} 对象。

- 对于 `touchstart` 事件，这个 {{ domxref("TouchList") }} 对象列出在此次事件中新增加的触点。
- 对于 `touchmove` 事件，列出和上一次事件相比较，发生了变化的触点。
- 对于 touchend 事件，**`changedTouches`** 是已经从触摸面的离开的触点的集合（也就是说，手指已经离开了屏幕/触摸面）。

### 语法

```plain
var touches = touchEvent.changedTouches;
```

这是一个只读属性。

### 返回值

- `touches`
  - : 列出对应这个触摸事件的 {{ domxref("Touch") }} 对象的 {{ domxref("TouchList") }} 对象。

### 标准定义

[Touch Events Specification](https://www.w3.org/TR/touch-events/)
