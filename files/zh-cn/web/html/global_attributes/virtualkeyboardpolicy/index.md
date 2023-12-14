---
title: virtualkeyboardpolicy
slug: Web/HTML/Global_attributes/virtualkeyboardpolicy
l10n:
  sourceCommit: d3cdafcdb4d22e5c55771501e7c80451a96aa032
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

**`virtualkeyboardpolicy`** [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)是一个枚举属性。当在一个元素上指定了该属性，且也同时使用了 [`contenteditable`](/zh-CN/docs/Web/HTML/Global_attributes#contenteditable) 属性时，它会控制在平板电脑、手机或其他设备上的虚拟键盘的行为，这些设备上可能没有硬件键盘。

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
