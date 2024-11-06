---
title: "Document: alinkColor プロパティ"
short-title: alinkColor
slug: Web/API/Document/alinkColor
l10n:
  sourceCommit: 41c3f093216bda022f04b4a40fa55e2f0b7af5e0
---

{{APIRef("DOM")}}{{Deprecated_header}}

文書本文のアクティブなリンクの色を取得または設定します。リンクは `mousedown` と `mouseup` イベントの間にアクティブになります。

## 値

文字列で、色の名前 (`blue`, `darkblue`, など) または色の 16 進値 (`#0000FF` など) が入ります。

## メモ

Mozilla Firefox では、このプロパティの既定値は赤 (16 進で `#ee0000`) です。

`document.alinkColor` は [DOM Level 2 HTML](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268) で非推奨となっています。代替方法の一つは CSS セレクターの {{Cssxref(":active")}} です。

他の代替手段として `document.body.alink` がありますが、上記の CSS による代替手段が設置されたため [HTML 4.01 で非推奨](https://www.w3.org/TR/html401/struct/global.html#adef-alink)となっています。

Firefox は `alinkColor`/`:active` および {{Cssxref(":focus")}} の両方に対応しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
