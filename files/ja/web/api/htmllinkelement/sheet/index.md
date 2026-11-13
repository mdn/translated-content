---
title: "HTMLLinkElement: sheet プロパティ"
short-title: sheet
slug: Web/API/HTMLLinkElement/sheet
l10n:
  sourceCommit: e1250f3487ad2d64e06cca58660ddc95b9a2d65c
---

{{APIRef("HTML DOM")}}

**`sheet`** は、{{domxref("HTMLLinkElement")}} インターフェイスの読み取り専用プロパティで、この要素に関連付けられたスタイルシートが入ります。

スタイルシートは `rel="stylesheet"` が `<link>` と一緒に使用されると `HTMLLinkElement` に関連付けられます。

## 値

{{DOMxRef("CSSStyleSheet")}} オブジェクトです。この要素に関連付けられたものがない場合は `null` になります。

## 例

```html
<link rel="stylesheet" href="styles.css" />
```

`HTMLLinkElement` オブジェクトの `sheet` プロパティは、`styles.css` を記述する {{domxref("CSSStyleSheet")}} オブジェクトを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
