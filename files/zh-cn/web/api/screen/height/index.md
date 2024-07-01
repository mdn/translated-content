---
title: Screen.height
slug: Web/API/Screen/height
---

{{APIRef}}

## 概述

返回屏幕的高度（单位：像素）。

## 语法

```plain
iHeight = window.screen.height
```

## 示例

```js
if (window.screen.availHeight !== window.screen.height) {
  // something is occupying some screen real estate!
}
```

## 备注

注意，该属性返回的高度值并不是全部对浏览器窗口可用。小工具（Widgets），如任务栏或其他特殊的程序窗口，可能会减少浏览器窗口和其他应用程序能够利用的空间。

当返回屏幕高度时，IE 会考虑缩放设置。只有当缩放比例为 100% 时，IE 才会返回真实的屏幕高度。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
