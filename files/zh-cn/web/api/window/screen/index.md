---
title: Window.screen
slug: Web/API/Window/screen
---

{{APIRef("CSSOM View")}}

返回当前 window 的 screen 对象。screen 对象实现了{{domxref("Screen")}}接口，它是个特殊的对象，返回当前渲染窗口中和屏幕有关的属性。

## 语法

```plain
screenObj = window.screen;
```

## 示例

```js
if (screen.pixelDepth < 8) {
  // use low-color version of page
} else {
  // use regular, colorful page
}
```

## Specification

TBD
