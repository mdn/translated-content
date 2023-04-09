---
title: CSSStyleDeclaration.cssFloat
slug: Web/API/CSSStyleDeclaration/cssFloat
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{APIRef("CSSOM")}}

**`cssFloat`** は {{domxref("CSSStyleDeclaration")}} インターフェイスのプロパティで、 {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}} を `float` を引数として呼び出したときの結果を返します。

設定したときは、 {{DOMxRef("CSSStyleDeclaration.setProperty()")}} を `float` を第一引数、指定された値を第二引数として呼び出します。指定された値は {{cssxref("float")}} プロパティで有効な値でなければなりません。

## 値

文字列です。

## 例

以下の例では、スタイルシートには、 1 つだけのルール `.box` に {{cssxref("float")}} プロパティの値が `left` と設定されています。この値は `cssFloat` から返されます。次に、 `cssFloat` を使用して値を "right" に設定し、新しい値を返します。

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
console.log(rule.style.cssFloat); //right
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
