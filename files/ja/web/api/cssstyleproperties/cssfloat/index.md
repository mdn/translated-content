---
title: "CSSStyleProperties: cssFloat プロパティ"
short-title: cssFloat
slug: Web/API/CSSStyleProperties/cssFloat
l10n:
  sourceCommit: d3bbe8558e181a2b6e04abdedc429fb2a0e4f015
---

{{APIRef("CSSOM")}}

**`cssFloat`** は {{domxref("CSSStyleProperties")}} インターフェイスのプロパティで、CSS の {{cssxref("float")}} プロパティを返します。

これは、このオブジェクトに対して {{DOMxRef("CSSStyleDeclaration.getPropertyValue()","getPropertyValue()")}} を呼び出し、引数に `float` を渡した結果です。

設定時には {{DOMxRef("CSSStyleDeclaration.setProperty()","setProperty()")}} を呼び出し、第一引数に `float`、第二引数に指定された値を渡します。
指定された値は {{cssxref("float")}} プロパティで有効な値でなければなりません。

## 値

文字列です。

`null` 値に設定された場合、`null` 値は空文字列 (`""`) に変換されますので、`csd.cssFloat = null` は `csd.cssFloat = ""` と同等になります。

## 例

下記例では、このスタイルシートに `.box` に対するルールが 1 つ含まれており、そのルールには {{cssxref("float")}} プロパティが `left` の値で設定されています。この値は `cssFloat` によって返されます。その後、`cssFloat` を使用してこの値を "right" に設定し、新しい値を返します。

```css
.box {
  float: left;
  inline-size: 300px;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let rule = myRules[0];
console.log(rule.style.cssFloat); // "left"
rule.style.cssFloat = "right";
console.log(rule.style.cssFloat); // "right"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
