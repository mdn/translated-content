---
title: VirtualKeyboard：boundingRect 属性
slug: Web/API/VirtualKeyboard/boundingRect
l10n:
  sourceCommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

{{domxref("VirtualKeyboard")}} 接口的 **`boundingRect`** 属性包含一个用于指示覆盖在网页上的屏幕虚拟键盘的位置和大小的 {{domxref("DOMRect")}}。

当使用{{domxref("VirtualKeyboard_API", "虚拟键盘 API", "", "nocode")}} 时，设置 {{domxref("VirtualKeyboard.overlaysContent", "overlaysContent")}} 属性为 `true` 可通过使屏幕虚拟键盘覆盖在视口上，以防止浏览器自动调整视口大小。

## 值

一个指示视窗中虚拟键盘的位置和大小的 {{domxref("DOMRect")}}。

矩形的 `x`、`y`、`width` 和 `height` 坐标对于重新定位网页中需要在虚拟键盘显示时仍可见的内容非常有用。

```js
const { x, y, width, height } = navigator.virtualKeyboard.boundingRect;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("VirtualKeyboard_API", "VirtualKeyboard API", "", "nocode")}}
- [使用虚拟键盘 API 实现完全控制](https://developer.chrome.google.cn/docs/web-platform/virtual-keyboard)
