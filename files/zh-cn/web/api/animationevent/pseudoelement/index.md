---
title: AnimationEvent：pseudoElement 属性
short-title: pseudoElement
slug: Web/API/AnimationEvent/pseudoElement
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Web Animations")}}

**`AnimationEvent.pseudoElement`** 只读属性是一个以 `'::'` 开头，包含动画运行在其上的[伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)的名称的字符串。如果动画不是在伪元素上运行而是直接在元素上运行，则该属性值为空字符串 `''`。

## 值

一个以 `'::'` 开头的字符串，包含正在运行着对应动画的[伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)的名称。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations/Using)
- 与动画相关的 CSS 属性和 at 规则：{{cssxref("animation")}}、{{cssxref("animation-delay")}}、{{cssxref("animation-direction")}}、{{cssxref("animation-duration")}}、{{cssxref("animation-fill-mode")}}、{{cssxref("animation-iteration-count")}}、{{cssxref("animation-name")}}、{{cssxref("animation-play-state")}}、{{cssxref("animation-timing-function")}}、{{cssxref("@keyframes")}}。
- 它所属的 {{domxref("AnimationEvent")}} 接口。
