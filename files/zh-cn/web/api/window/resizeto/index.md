---
title: Window.resizeTo
slug: Web/API/Window/resizeTo
---

{{APIRef}}

## 概述

动态调整窗口的大小。

## 语法

```plain
window.resizeTo(aWidth, aHeight)
```

### 参数

- `aWidth` 是一个整数，表示新的 {{domxref("window.outerWidth","outerWidth")}}（单位：像素）（包括滚动条、窗口边框等）。
- `aHeight` 是一个整数，表示新的 {{domxref("window.outerHeight","outerHeight")}}（单位：像素）（包括滚动条、标题栏、窗口边框等）。

## 示例

```js
// 将窗口设置为整个屏幕的 1/4 大小（面积）
function quarter() {
  window.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2);
}
```

## 备注

从 Firefox 7 开始，不能改变浏览器窗口的大小了，要依据[下面的规则](https://bugzilla.mozilla.org/show_bug.cgi?id=565541#c24)：

1. 不能设置那些不是通过 window\.open 创建的窗口或 Tab 的大小。
2. 当一个窗口里面含有一个以上的 Tab 时，无法设置窗口的大小。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("window.resizeBy()")}}
