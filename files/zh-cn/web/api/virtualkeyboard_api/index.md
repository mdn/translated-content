---
title: 虚拟键盘 API
slug: Web/API/VirtualKeyboard_API
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{SeeCompatTable}}{{DefaultAPISidebar("VirtualKeyboard API")}}{{securecontext_header}}

虚拟键盘（VirtualKeyboard）API 允许开发者在如平板电脑、手机等没有物理键盘的设备上，当屏幕虚拟键盘出现/消失时控制其应用程序布局。

Web 浏览器通常会通过自动调整视口高度并在聚焦时滚动到输入字段，来处理虚拟键盘。

下图展示了设备屏幕虚拟键盘隐藏和显示时，网页的视口高度和滚动位置的差异。

![两台设备，一台没有虚拟键盘，显示网页可以利用设备大部分的垂直空间；一台有虚拟键盘，显示网页只能在剩余的空间内显示。](viewport-height.png)

更复杂的应用程序或特定设备（如多屏手机）可能需要在虚拟键盘出现时更精确地控制布局。

下图展示了双屏设备上虚拟键盘只出现在其中一个屏幕上的情况。视口在两个屏幕上都变小以适应虚拟键盘，这导致未显示虚拟键盘的屏幕上出现了被浪费掉的空间。

![双屏设备，其中虚拟键盘显示在其中一个屏幕上，显示网页只能利用虚拟键盘显示后剩余的垂直空间，即使这样会在另一个屏幕上留下空白空间。](dual-screen.png)

虚拟键盘 API 可以让开发者选择不使用浏览器自动处理虚拟键盘的方式，而是完全控制虚拟键盘的行为。使用虚拟键盘 API，在表单控件聚焦时，虚拟键盘会根据需要显示和隐藏，但视口不会改变，开发者可以利用 JavaScript 和 CSS 来自定义布局。

## 概念

虚拟键盘 API 包括三个部分：

- {{domxref("VirtualKeyboard")}} 接口，通过 {{domxref('navigator.virtualKeyboard')}} 访问，用于选择是否使用浏览器的自动虚拟键盘行为，以及通过编程方式显示或隐藏虚拟键盘，还可以获取当前虚拟键盘的位置和大小。
- `keyboard-inset-*` CSS 环境变量提供有关虚拟键盘位置和大小的信息。
- [`virtualkeyboardpolicy`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) 属性指定虚拟键盘是否应出现在 `contenteditable` 元素上。

### 选择不使用自动虚拟键盘行为

要不使用浏览器的自动虚拟键盘行为，请使用 `navigator.virtualKeyboard.overlaysContent = true`。浏览器将不再自动调整视口大小以为虚拟键盘腾出空间，而是将虚拟键盘覆盖在你的内容之上。

### 使用 JavaScript 检测虚拟键盘的几何信息

一旦选择不使用默认的浏览器行为，你可以使用 `navigator.virtualKeyboard.boundingRect` 获取当前虚拟键盘的几何信息，并使用 CSS 和 JavaScript 根据需要调整布局。此外，你可以通过监听 `geometrychange` 事件来检测几何变化，例如虚拟键盘显示或隐藏时的变化。

这对于将重要的 UI 元素定位在虚拟键盘不覆盖的区域非常有用。

下面的代码片段使用 `geometrychange` 事件来检测虚拟键盘几何变化；它访问 `boundingRect` 属性来查询虚拟键盘的大小和位置：

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {
    const { x, y, width, height } = event.target.boundingRect;
  });
}
```

### 使用 CSS 环境变量检测虚拟键盘的几何信息

虚拟键盘 API 还公开了以下 [CSS 环境变量](/zh-CN/docs/Web/CSS/Reference/Values/env)：`keyboard-inset-top`、`keyboard-inset-right`、`keyboard-inset-bottom`、`keyboard-inset-left`、`keyboard-inset-width` 和 `keyboard-inset-height`。

`keyboard-inset-*` CSS 环境变量对于使用 CSS 根据虚拟键盘的出现调整布局非常有用。它们通过距离视口边缘的顶部、右侧、底部和左侧插入定义一个矩形。如果需要，还可以使用 `width` 和 `height` 变量。

下面的代码片段使用 `keyboard-inset-height` CSS 变量，在类似聊天应用程序中的消息列表和输入字段下方预留虚拟键盘出现的空间。当虚拟键盘隐藏时，`env()` 函数返回 `0px`，`keyboard` 网格区域被隐藏。消息和输入元素可以占据视窗的全部高度。当虚拟键盘出现时，`keyboard` 网格区域将获得虚拟键盘的高度。

```html
<style>
  body {
    display: grid;
    margin: 0;
    height: 100vh;
    grid-template:
      "messages" 1fr
      "input" auto
      "keyboard" env(keyboard-inset-height, 0px);
  }
</style>
<ul id="messages"></ul>
<input type="text" />
<script>
  if ("virtualKeyboard" in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;
  }
</script>
```

### 控制 `contenteditable` 元素上的虚拟键盘

默认情况下，使用 [`contenteditable`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性的元素在被轻触或点击时会触发虚拟键盘。在某些情况下，可能希望阻止这种行为，并在其他事件后手动显示虚拟键盘。

将 [`virtualkeyboardpolicy`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) 属性设置为 `manual` 可以阻止浏览器默认处理虚拟键盘的行为，而是通过使用 {{domxref("VirtualKeyboard")}} 接口的 `show()` 和 `hide()` 方法自行处理。

下面的代码片段展示了如何使用 `virtualkeyboardpolicy` 属性和 `navigator.virtualKeyboard.show()` 方法来在双击事件后显示虚拟键盘：

```html
<div contenteditable virtualkeyboardpolicy="manual" id="editor"></div>
<script>
  if ("virtualKeyboard" in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;

    const editor = document.getElementById("editor");
    editor.addEventListener("dblclick", () => {
      navigator.virtualKeyboard.show();
    });
  }
</script>
```

## 接口

- {{domxref('VirtualKeyboard')}} {{experimental_inline}}
  - : 提供用于检索键盘布局映射和切换对物理键盘的按键捕获的函数。

## 对其他接口的扩展

- {{domxref("Navigator.virtualKeyboard")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 返回对 {{DOMxRef("VirtualKeyboard")}} API（用于控制屏幕虚拟键盘）的引用。
- {{domxref("HTMLElement.virtualkeyboardpolicy")}} {{experimental_inline}}
  - : 一个字符串，指示在元素聚焦时是否使用浏览器的默认策略显示虚拟键盘，或者手动处理虚拟键盘的显示。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用虚拟键盘 API 实现完全控制](https://developer.chrome.google.cn/docs/web-platform/virtual-keyboard)
