---
title: "HTMLLinkElement: sheet プロパティ"
short-title: sheet
slug: Web/API/HTMLLinkElement/sheet
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`sheet`** は {{domxref("HTMLLinkElement")}} インターフェイスの読み取り専用プロパティで、この要素に関連付けられたスタイルシートが入ります。

スタイルシートは `rel="stylesheet"` が `<link>` と一緒に使用されると `HTMLLinkElement` に関連付けられます。

## 値

{{DOMxRef("StyleSheet")}} オブジェクトです。この要素に関連付けられたものがない場合は `null` になります。

## 例

```html
<html>
  <header>
    <link rel="stylesheet" href="styles.css" />
    …
  </header>
</html>
```

`HTMLLinkElement` オブジェクトの `sheet` プロパティは `styles.css` と記述されているスタイルシート ({{domxref("StyleSheet")}}) オブジェクトを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
