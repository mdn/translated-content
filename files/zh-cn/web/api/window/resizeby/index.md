---
title: Window.resizeBy()
slug: Web/API/Window/resizeBy
---

{{APIRef}}

## 概述

调整窗口大小。

## 语法

```plain
window.resizeBy(xDelta, yDelta)
```

### 参数

- `xDelta` 为窗口水平方向变化的像素值。
- `yDelta` 为窗口垂直方向变化的像素值。

## 例子

```js
// 缩小窗口
window.resizeBy(-200, -200);
```

## 备注

该方法相对于窗口当前大小来调整该窗口的大小。要以绝对大小方式调整窗口的大小，可使用 {{domxref("window.resizeTo")}}。

从 Firefox 7，依据[下面的规则](https://bugzilla.mozilla.org/show_bug.cgi?id=565541#c24)，不能再调整浏览器内一个窗口的默认大小了：

1. 不能调整非 window\.open 方法打开的窗口或 Tab 的大小。
2. 当一个窗口内包含有一个以上的 Tab 时，不能调整窗口的大小。

## 规范

DOM Level 0。不属于规范。
