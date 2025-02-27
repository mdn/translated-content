---
title: "CSSImportRule: stylesheet プロパティ"
slug: Web/API/CSSImportRule/styleSheet
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM")}}

**`styleSheet`** は {{domxref("CSSImportRule")}} インターフェイスの読み取り専用プロパティで、 {{cssxref("@import")}} [アットルール](/ja/docs/Web/CSS/At-rule)によって指定された CSS スタイルシートを返します。これは {{domxref("CSSStyleSheet")}} オブジェクトの形です。

{{cssxref("@import")}} [アットルール](/ja/docs/Web/CSS/At-rule)には、常に関連付けられたスタイルシートがあります。

## 値

{{domxref("CSSStyleSheet")}} です。

## 例

このスタイルシートは単一の {{cssxref("@import")}} ルールが記載されています。したがって、 CSS ルールのリストの最初の項目は `CSSImportRule` になります。 `styleSheet` プロパティはインポートされたスタイルシートを返します。

```css
@import url("style.css") screen;
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].styleSheet); // CSSStyleSheet オブジェクトを返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
