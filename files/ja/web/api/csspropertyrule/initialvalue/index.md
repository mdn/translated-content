---
title: "CSSPropertyRule: initialValue プロパティ"
slug: Web/API/CSSPropertyRule/initialValue
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Properties and Values API")}}

**`initialValue`** は {{domxref("CSSPropertyRule")}} インターフェイスの読み取り専用プロパティで、 null にすることができます。 {{cssxref("@property")}} ルールで表されるカスタムプロパティ登録の初期値を返し、プロパティの初期値を制御します。

## 値

文字列で、 [CSS Syntax 3](https://www.w3.org/TR/css-syntax-3/#typedef-declaration-value) で定義されている {{CSSXref("&lt;declaration-value&gt;")}} です。

## 例

このスタイルシートには、単一の {{cssxref("@property")}} ルールが格納されています。最初に返される {{domxref("CSSRule")}} は、このルールを表す `CSSPropertyRule` となります。 `initialValue` プロパティは、文字列 `"#c0ffee"` を返します。これは、 CSS の `initial-value` プロパティの値です。

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].initialValue); //the string "#c0ffee"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
