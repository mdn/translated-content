---
title: "CSSKeyframeRule: style プロパティ"
short-title: style
slug: Web/API/CSSKeyframeRule/style
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{ APIRef("CSSOM") }}

**`style`** は {{domxref("CSSKeyframeRule")}} インターフェイスのプロパティで、 {{cssxref("@keyframes")}} ルールの本体で有効な記述子を表す {{domxref("CSSStyleDeclaration")}} オブジェクトです。

## 値

{{domxref("CSSStyleDeclaration")}} オブジェクトす。

`style` プロパティ自体は読み取り専用ですが、これはこの `CSSStyleDeclaration` オブジェクトを置き換えることができないという意味であり、`style` プロパティに直接代入を行うことは可能です。そうすると、{{domxref("CSSStyleDeclaration/cssText", "cssText")}} プロパティに代入することと同じことになります。また、`CSSStyleDeclaration` オブジェクトは {{domxref("CSSStyleDeclaration/setProperty", "setProperty()")}} や {{domxref("CSSStyleDeclaration/removeProperty", "removeProperty()")}} メソッドを使用して変更することもできます。

## 例

この CSS には {{cssxref("@keyframes")}} アットルールが記載されています。これは最初の {{domxref("CSSRule")}} であり、 `document.styleSheets[0].cssRules` で返されます。
`myRules[0]` は {{domxref("CSSKeyframesRule")}} オブジェクトを返し、その中に各キーフレームに対応する個々の {{domxref("CSSKeyFrameRule")}} オブジェクトが格納されます。

```css
@keyframes slide-in {
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
let keyframes = myRules[0]; // CSSKeyframesRule
console.log(keyframes[0].style); // CSSStyleDeclaration
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
