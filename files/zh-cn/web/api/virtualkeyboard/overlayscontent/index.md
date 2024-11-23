---
title: VirtualKeyboard：overlaysContent 属性
slug: Web/API/VirtualKeyboard/overlaysContent
l10n:
  sourceCommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

VirtualKeyboard 接口的 **`overlaysContent`** 属性用于选择不使用浏览器自动处理屏幕虚拟键盘的方式（减小视窗大小来为屏幕虚拟键盘腾出空间）。

如果将 `overlaysContent` 属性设置为 `true`，则浏览器在虚拟键盘出现时不再调整视口大小，而是让虚拟键盘覆盖在网页内容上。从而，你可以使用{{domxref("VirtualKeyboard_API", "虚拟键盘 API", "", "nocode")}}、自定义 CSS 和 JavaScript 适应页面布局。

## 值

一个布尔值。默认为 `false`，设置为 `true` 可选择不使用浏览器对屏幕虚拟键盘的自动处理。

## 示例

```js
if ("virtualKeyboard" in navigator) {
  console.log(navigator.virtualKeyboard.overlaysContent); // false
  navigator.virtualKeyboard.overlaysContent = true; // 选择不使用自动处理。
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("VirtualKeyboard_API", "VirtualKeyboard API", "", "nocode")}}
- [使用 VirtualKeyboard API 实现完全控制](https://developer.chrome.google.cn/docs/web-platform/virtual-keyboard)
