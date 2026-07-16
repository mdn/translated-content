---
title: AnimationEvent
slug: Web/API/AnimationEvent
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("Web Animations")}}

**`AnimationEvent`** 介面表示提供與[動畫](/zh-TW/docs/Web/CSS/Guides/Animations/Using)相關訊息的事件。

{{InheritanceDiagram}}

## 建構子

- {{domxref("AnimationEvent.AnimationEvent", "AnimationEvent()")}}
  - : 使用給定的參數建立一個 `AnimationEvent` 事件。

## 實例屬性

_也繼承自其父 {{domxref("Event")}} 的屬性_。

- {{domxref("AnimationEvent.animationName")}} {{ReadOnlyInline}}
  - : 包含產生動畫的 {{cssxref("animation-name")}} 值的字串。
- {{domxref("AnimationEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : 一個 `float`，表示此事件觸發時動畫已執行的時間（以秒為單位），不包括動畫暫停的時間。對於 `animationstart` 事件，`elapsedTime` 為 `0.0`，除非 {{cssxref("animation-delay")}} 有負值，此時事件將以 `(-1 * delay)` 的 `elapsedTime` 值觸發。
- {{domxref("AnimationEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : 一個以 `'::'` 開頭的字串，包含動畫運行的[偽元素](/zh-TW/docs/Web/CSS/Reference/Selectors/Pseudo-elements)名稱。如果動畫不是運行在偽元素上，而是運行在元素上，則為空字串：`''`。

## 實例方法

_繼承自其父 {{domxref("Event")}} 的方法_。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 CSS 動畫](/zh-TW/docs/Web/CSS/Guides/Animations/Using)
- 與動畫相關的 CSS 屬性與 at-規則：{{cssxref("animation")}}、{{cssxref("animation-composition")}}、{{cssxref("animation-delay")}}、{{cssxref("animation-direction")}}、{{cssxref("animation-duration")}}、{{cssxref("animation-fill-mode")}}、{{cssxref("animation-iteration-count")}}、{{cssxref("animation-name")}}、{{cssxref("animation-play-state")}}、{{cssxref("animation-timing-function")}}、{{cssxref("@keyframes")}}。
