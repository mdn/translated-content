---
title: AnimationEvent
slug: Web/API/AnimationEvent
---

{{SeeCompatTable}}{{APIRef("Web Animations API")}}

## 摘要

**`AnimationEvent`** 介面表現提供[動畫](/zh-TW/docs/Web/CSS/CSS_animations/Using_CSS_animations)相關資訊的事件。

{{InheritanceDiagram}}

## 性能

_另外從其父 {{domxref("Event")}} 繼承屬性_。

- {{domxref("AnimationEvent.animationName")}} {{readonlyInline}}
  - : 是一個{{domxref("DOMString")}}包含的值 {{cssxref("animation-name")}} CSS 屬性與過渡有關。
- {{domxref("AnimationEvent.elapsedTime")}} {{readonlyInline}}
  - : 是一個`float`給予時間的動畫已經運行，以秒為單位，當該事件燒製，不含動畫被暫停的任何時間量。為一個`"animationstart"`事件，`elapsedTime`是`0.0`，除非有一個負值{{cssxref("animation-delay")}}，在這種情況下，該事件將與燒製`elapsedTime`含有 `(-1 * delay)`。
- {{domxref("AnimationEvent.pseudoElement")}} {{readonlyInline}}
  - : 是一個{{domxref("DOMString")}}，從`"::"`，包含的名字[虛擬元素](/zh-TW/docs/Web/CSS/Pseudo-elements)的動畫運行。如果動畫上不偽元素，但該元素，一個空字符串上運行`：''。`

## 構造函數

- {{domxref("AnimationEvent.AnimationEvent","AnimationEvent()")}}
  - : 創建一個`AnimationEvent`事件具有給定參數。

## 方法

_同時繼承其父{{domxref("事件")}}方法_。

- {{domxref("AnimationEvent.initAnimationEvent()")}} {{non-standard_inline}}{{deprecated_inline}}
  - : 初始化`AnimationEvent` 使用過時的創建 {{domxref("Document.createEvent()", "Document.createEvent(\"AnimationEvent\")")}} 方法。

## 規範

{{Specifications}}

## 瀏覽器兼容性

{{Compat}}

## 另請參見

- [使用 CSS 動畫](/zh-TW/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- Animation-related CSS properties and at-rules: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.
