---
title: AnimationEvent：elapsedTime 属性
short-title: elapsedTime
slug: Web/API/AnimationEvent/elapsedTime
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Web Animations")}}

**`AnimationEvent.elapsedTime`** 只读属性是一个 `float` 类型的值，用于表示动画触发此事件时已运行的时间（不包括任何暂停时间，并且以秒为单位）。对于 {{domxref("Element/animationstart_event", "animationstart")}} 事件，如果 {{cssxref("animation-delay")}} 的值为负数，则 `elapsedTime` 将包括 `(-1 * delay)`；否则，`elapsedTime` 为 `0.0`。

## 值

一个以秒为单位的时间值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations/Using)
- 与动画相关的 CSS 属性和 at 规则：{{cssxref("animation")}}、{{cssxref("animation-delay")}}、{{cssxref("animation-direction")}}、{{cssxref("animation-duration")}}、{{cssxref("animation-fill-mode")}}、{{cssxref("animation-iteration-count")}}、{{cssxref("animation-name")}}、{{cssxref("animation-play-state")}}、{{cssxref("animation-timing-function")}}、{{cssxref("@keyframes")}}。
- 它所属的 {{domxref("AnimationEvent")}} 接口。
