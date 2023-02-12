---
title: CSSPageRule.selectorText
slug: Web/API/CSSPageRule/selectorText
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("CSSOM")}}

**`selectorText`** は {{domxref("CSSPageRule")}} インターフェイスのプロパティで、この `CSSPageRule` に関連付けられたセレクターを取得および設定します。

## 値

文字列で宇s。

## 例

このスタイルシートは 2 つの {{cssxref("@page")}} ルールを含んでいます。 `selectorText` プロパティは、`:first` のセレクターテキストを文字列として返します。

```css
@page {
  margin: 1cm;
}

@page :first {
  margin: 2cm;
}
```

```js
let myRules = document.styleSheets[0].cssRules; // 2 つの myRules を返す
console.log(myRules[1].selectorText); // ":first" という文字列を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
