---
title: CSSKeyframeRule.style
slug: Web/API/CSSKeyframeRule/style
---

{{ APIRef("CSSOM") }}

**`CSSKeyframeRule.style`** プロパティは {{ domxref("CSSStyleDeclaration") }} インターフェイスであり、 {{ domxref("CSSKeyframeRule") }} の[宣言ブロック](https://www.w3.org/TR/1998/REC-CSS2-19980512/syndata.html#block)です。

## 値

{{domxref("CSSStyleDeclaration")}} オブジェクトで、次のプロパティがあります。

- readonly flag
  - : 未設定。
- declarations
  - : このルール内で宣言された宣言で、指定された順番であり、個別指定プロパティに展開された一括指定プロパティです。
- parent CSS rule
  - : コンテキストオブジェクトで、 [this](https://heycam.github.io/webidl/#this) の別名です。
- owner node
  - : null です。

## 例

この CSS には keyframes アットルールが記載されています。これは最初の {{domxref("CSSRule")}} であり、 `document.styleSheets[0].cssRules` で返されます。
`myRules[0]` は {{domxref("CSSKeyframesRule")}} オブジェクトを返し、その中に各キーフレームに対応する個々の {{domxref("CSSKeyFrame")}} オブジェクトが格納されます。

```css
@keyframes slidein {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let keyframes = myRules[0]; // a CSSKeyframesRule
console.log(keyframes[0].style); // a CSSStyleDeclaration
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
