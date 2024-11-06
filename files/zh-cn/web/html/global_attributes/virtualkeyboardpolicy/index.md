---
title: virtualkeyboardpolicy
slug: Web/HTML/Global_attributes/virtualkeyboardpolicy
l10n:
  sourceCommit: 96e73ab4d1fdb714a6a6516821b3206d83909046
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

**`virtualkeyboardpolicy`** [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)是一个枚举属性。当在元素上指定元素内容可编辑时（例如，它是 {{htmlelement("input")}} 或 {{htmlelement("textarea")}} 元素，或具有 [`contenteditable`](/zh-CN/docs/Web/HTML/Global_attributes/contenteditable) 属性的元素），它会控制平板电脑、手机或其他可能没有硬件键盘的设备上的屏幕虚拟键盘行为。

该属性必须设置以下值之一：

- `auto` 或*空字符串*：在元素被聚焦或被点击时会自动显示虚拟键盘。
- `manual`：它会将元素的聚焦和点击与虚拟键盘的状态分离。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所有的[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.contentEditable")}} 和 {{domxref("HTMLElement.isContentEditable")}}
- {{domxref("VirtualKeyboard_API", "虚拟键盘 API", "", "nocode")}}
