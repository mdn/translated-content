---
title: "CSSPropertyRule: syntax プロパティ"
short-title: syntax
slug: Web/API/CSSPropertyRule/syntax
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Properties and Values API")}}

**`syntax`** は {{domxref("CSSPropertyRule")}} インターフェイスの読み取り専用プロパティで、 これは、 {{cssxref("@property")}} ルールによって表されるカスタムプロパティ登録のリテラル構文を返し、プロパティの値が計算値の時点でどのように解釈されるかを制御するものです。

## 値

文字列です。

## 例

このスタイルシートには、単一の {{cssxref("@property")}} ルールが格納されています。最初に返される {{domxref("CSSRule")}} は、このルールを表す `CSSPropertyRule` となります。 `syntax` プロパティはリテラル文字列の `"<color>"` を返します。

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].syntax); //the string "<color>"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
