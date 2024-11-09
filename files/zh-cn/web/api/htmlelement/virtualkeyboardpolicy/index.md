---
title: HTMLElement：virtualKeyboardPolicy 属性
slug: Web/API/HTMLElement/virtualKeyboardPolicy
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}

{{domxref("HTMLElement")}} 接口的 **`virtualKeyboardPolicy`** 属性用于在元素的内容可编辑（例如是一个 {{htmlelement("input")}} 或 {{htmlelement("textarea")}} 元素，或者元素设置了 [`contenteditable`](/zh-CN/docs/Web/HTML/Global_attributes/contenteditable) 属性）时获取和设置一个字符串，指示在设备上（如平板电脑、手机或其他没有硬件键盘的设备）上屏幕虚拟键盘的行为。

它反映了 [`virtualkeyboardpolicy`](/zh-CN/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) HTML 全局属性的值。

## 值

一个枚举值；可能的取值包括：

- `"auto"` 或空字符串（`""`）
  - : 当用户点击或聚焦元素时，浏览器自动显示虚拟键盘。
- `"manual"`
  - : 浏览器不会自动显示虚拟键盘：显示/隐藏虚拟键盘由脚本手动处理。

## 示例

以下示例展示了如何通过脚本控制屏幕虚拟键盘的行为：

```js
const element = document.querySelector("input");

// 通过脚本手动控制屏幕虚拟键盘的行为
element.virtualKeyboardPolicy = "manual";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`virtualkeyboardpolicy`](/zh-CN/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) HTML 全局属性
