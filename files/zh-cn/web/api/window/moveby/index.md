---
title: Window.moveBy()
slug: Web/API/Window/moveBy
---

{{APIRef}}

## 概述

根据指定的值，移动当前窗口。

## 语法

```plain
window.moveBy(deltaX, deltaY)
```

### 参数

- `deltaX` 表示窗口在水平方向移动的像素值。
- `deltaY` 表示窗口在垂直方向移动的像素值。

## 示例

```js
function budge() {
  moveBy(10, -10);
}
```

## 备注

可以使用负值作为该函数的参数。该函数产生相对移动，而 {{domxref("window.moveTo")}} 产生一个绝对移动。

从 Firefox 7 开始，依据[下面的规则](https://bugzilla.mozilla.org/show_bug.cgi?id=565541#c24)，不能再移动一个浏览器里的窗口。

1. 不能移动非 window\.open 创建的窗口或 Tab。
2. 当一个窗口里有多于一个 Tab 时，不能移动该窗口。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

从 Firefox 7 开始，网站在[以下情况下](https://bugzilla.mozilla.org/show_bug.cgi?id=565541#c24)将不能再移动浏览器窗口。

1. 不能移动不是由 {{domxref("Window.open()")}} 创建的窗口或标签页。
2. 当一个窗口里有多于一个标签页时，不能移动该窗口或其中的标签页。

## 参见

- {{domxref("window.moveTo()")}}
