---
title: CSS 宣言ブロック
slug: Web/API/CSS_Object_Model/CSS_Declaration_Block
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{ APIRef("CSSOM") }}

**CSS 宣言ブロック**は、 CSS のプロパティと値を順番に集めたものです。 DOM では {{domxref("CSSStyleDeclaration")}} として表現されます。

それぞれのプロパティと値の組は、[CSS 宣言](/ja/docs/Web/API/CSS_Object_Model/CSS_Declaration) として知られています。 CSS 宣言ブロックには、以下の関連するプロパティがあります。

- computed フラグ
  - : {{domxref("CSSStyleDeclaration")}} オブジェクトが指定されたスタイルではなく、計算されたスタイルである場合に設定されます。既定では未設定です。
- 宣言
  - : このオブジェクトに関連付けられた [CSS 宣言](/ja/docs/Web/API/CSS_Object_Model/CSS_Declaration)です。
- 親 CSS ルール
  - : CSS 宣言ブロックが関連付けられている {{domxref("CSSRule")}} です。
- オーナーノード
  - : この CSS 宣言ブロックが関連付けられている{{domxref("element", "要素", "", 1)}}。それ以外は null。
- 更新フラグ
  - : この CSS 宣言ブロックがオーナーノードの [`style`](/ja/docs/Web/HTML/Reference/Global_attributes/style) 属性を更新している場合に設定されます。

{{domxref("CSSStyleDeclaration")}} が [CSS Object Model (CSSOM)](/ja/docs/Web/API/CSS_Object_Model) インターフェイスによって返されると、これらのプロパティは、仕様によって定義された適切な値に設定されます。

## 基本的な例

以下の例は、 {{htmlelement("Heading_elements","&lt;h1&gt;")}} 要素に対する宣言ブロックを持つ CSS ルールを示しています。 CSS の宣言ブロックは、中括弧で囲まれた行です。

```css
h1 {
  margin: 0 auto;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  font-style: italic;
  color: rebeccapurple;
}
```

この CSS 宣言ブロックを表す {{domxref("CSSStyleDeclaration")}} を {{domxref("CSSStyleRule.style")}} で使用することで返すことができます。

```js
let myRules = document.styleSheets[0].cssRules;
let rule = myRules[0]; // a CSSStyleRule
console.log(rule.style); // a CSSStyleDeclaration object
```

## 仕様書

{{Specifications}}
