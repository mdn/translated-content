---
title: VirtualKeyboard：geometrychange 事件
slug: Web/API/VirtualKeyboard/geometrychange_event
l10n:
  sourceCommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

{{domxref("VirtualKeyboard")}} 接口的 **`geometrychange`** 事件在当屏幕上的虚拟键盘在显示和隐藏状态之间切换时触发。

`geometrychange` 事件非常有用，用于检测虚拟键盘何时出现和消失，以便根据需要调整布局。这在使用 {{domxref("VirtualKeyboard_API", "Virtual Keyboard API", "", "nocode")}} 时尤为重要，可以禁用浏览器在虚拟键盘显示和隐藏时自动调整视窗大小。

## 语法

使用事件名称作为 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 方法的参数，或者设置事件处理程序属性。

```js
navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {});

navigator.virtualKeyboard.ongeometrychange = (event) => {};
```

## 事件类型

一个通用的 {{domxref("Event")}}。

## 示例

以下代码片段使用 `geometrychange` 事件来检测虚拟键盘几何属性的变化，然后访问 {{domxref("VirtualKeyboard.boundingRect", "boundingRect")}} 属性来查询虚拟键盘的大小和位置：

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {
    const { x, y, width, height } = event.target.boundingRect;
  });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("VirtualKeyboard_API", "VirtualKeyboard API", "", "nocode")}}
- [使用 VirtualKeyboard API 实现完全控制](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
