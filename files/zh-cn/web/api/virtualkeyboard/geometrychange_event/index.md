---
title: VirtualKeyboard：geometrychange 事件
slug: Web/API/VirtualKeyboard/geometrychange_event
l10n:
  sourceCommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

{{domxref("VirtualKeyboard")}} 接口的 **`geometrychange`** 事件会在屏幕虚拟键盘在显示和隐藏状态之间切换时触发。

`geometrychange` 事件对于检测虚拟键盘何时出现和消失（以便根据需要调整布局）非常有用。这在使用{{domxref("VirtualKeyboard_API", "虚拟键盘 API", "", "nocode")}} 以禁用浏览器在虚拟键盘显示和隐藏时自动调整视口大小时尤为重要。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或者设置事件处理器属性。

```js
navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {});

navigator.virtualKeyboard.ongeometrychange = (event) => {};
```

## 事件类型

通用 {{domxref("Event")}}。

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

- {{domxref("VirtualKeyboard_API", "虚拟键盘 API", "", "nocode")}}
- [使用虚拟键盘 API 实现完全控制](https://developer.chrome.google.cn/docs/web-platform/virtual-keyboard)
