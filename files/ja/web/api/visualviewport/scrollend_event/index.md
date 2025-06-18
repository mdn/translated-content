---
title: "VisualViewport: scrollend イベント"
short-title: scrollend
slug: Web/API/VisualViewport/scrollend_event
l10n:
  sourceCommit: 4b5b3e16c8260a429db07dd54420ae40794b96c2
---

{{APIRef("Visual Viewport")}}

**`scrollend`** は {{domxref("VisualViewport")}} インターフェイスのイベントで、視覚的ビューポートのスクロール操作が終了したときに発行されます。これにより、スクロール操作が完了したときに要素を更新することができます。例えば、 {{domxref("VisualViewport/resize_event", "resize")}} イベントと {{domxref("VisualViewport/scroll_event", "scroll")}} イベントを使用して、ピンチズームやスクロールが行われる際に要素が視覚的ビューポートに固定されるようにし、`scrollend` を使用してスクロールが終了したときに新しいコンテンツで要素を更新することができます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("scrollend", (event) => {});

onscrollend = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

使用例のデモについては、[視覚的ビューポート API](/ja/docs/Web/API/Visual_Viewport_API#例) のランディングページをご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
