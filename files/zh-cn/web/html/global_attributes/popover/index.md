---
title: popover
slug: Web/HTML/Global_attributes/popover
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

[全局属性](/zh-CN/docs/Web/HTML/Global_attributes) **`popover`** 用来指定一个元素为弹出式元素（popover element）。

弹出式元素通过 `display: none` 被隐藏，直到通过调用/控制元素（即带有 [`popovertarget`](/zh-CN/docs/Web/HTML/Element/button#popovertarget) 属性的 `<button>` 或 `<input type="button">`）或 {{domxref("HTMLElement.showPopover()")}} 调用打开。

当打开时，弹出式元素将出现在所有其他元素之上，即在{{glossary("top layer","顶层")}}上，并且不会受到父元素的 {{cssxref('position')}} 或 {{cssxref('overflow')}} 样式的影响。

`popover` 属性可以有 [`"auto"`](/zh-CN/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)（默认）或 [`"manual"`](/zh-CN/docs/Web/API/Popover_API/Using#using_manual_popover_state) 的取值。具有 `auto` 状态的弹窗可以通过在弹窗之外的区域进行选择，以达到“轻触关闭”的目的，并且通常一次仅允许屏幕上显示一个弹窗。相比之下，`manual` 弹窗必须始终明确隐藏，但可以用于菜单中嵌套弹窗等使用情况。

有关更详细的使用信息，请参阅 {{domxref("Popover API", "Popover API", "", "nocode")}} 页面。

## 示例

下述代码将呈现一个按钮，它将打开一个弹出式元素。

```html
<button popovertarget="my-popover">打开 Popover</button>

<div popover id="my-popover">大家好！欢迎你们！</div>
```

> **备注：** 请参阅我们的 [Popover API 示例页面](https://mdn.github.io/dom-examples/popover-api/)以访问所有的 MDN popover 示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Popover API", "Popover API", "", "nocode")}}
