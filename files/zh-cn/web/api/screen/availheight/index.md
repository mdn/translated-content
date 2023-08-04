---
title: Screen.availHeight
slug: Web/API/Screen/availHeight
---

{{APIRef}}

## 概述

返回浏览器窗口在屏幕上可占用的垂直空间，即最大高度。

## 语法

```plain
iAvail = window.screen.availHeight
```

## 示例

```js
if (window.screen.availHeight !== window.screen.height) {
  // something's in the way!
  // use available to size window
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
