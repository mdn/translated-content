---
title: "VisualViewport: scroll イベント"
short-title: scroll
slug: Web/API/VisualViewport/scroll_event
l10n:
  sourceCommit: 4b5b3e16c8260a429db07dd54420ae40794b96c2
---

{{APIRef("Visual Viewport")}}

**`scroll`** は {{domxref("VisualViewport")}} インターフェイスのイベントは、視覚的ビューポートがスクロールされた際に発行されます。これによって、通常はレイアウトビューポートに固定されている要素を、視覚的ビューポートがスクロールされた際に相対的に位置指定することができます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("scroll", (event) => {});

onscroll = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

使用例のデモについては、[視覚的ビューポート API](/ja/docs/Web/API/Visual_Viewport_API#例) のランディングページをご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
