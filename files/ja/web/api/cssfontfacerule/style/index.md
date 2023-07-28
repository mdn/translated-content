---
title: CSSFontFaceRule.style
slug: Web/API/CSSFontFaceRule/style
l10n:
  sourceCommit: a700bf9c980202561fc7022dac31550cf1a47a10
---

{{APIRef("CSSOM")}}

**`style`** は {{domxref("CSSFontFaceRule")}} インターフェイスの読み取り専用プロパティで、この {{cssxref("@font-face")}} [アットルール](/ja/docs/Web/CSS/At-rule)からスタイル情報を返します。これは {{domxref("CSSStyleDeclaration")}} オブジェクトの形です。

## 例

{{domxref("CSSStyleDeclaration")}} です。

## 例

この例では、 {{cssxref("@font-face")}} ページに例として挙げられている CSS を使用しています。最初に返される {{domxref("CSSRule")}} は `CSSFontFaceRule` となります。 `style` プロパティは {{domxref("CSSStyleDeclaration")}} を返し、`fontFamily`, `fontWeight`, `src` プロパティにはルールの情報が現れます。

```css
@font-face {
  font-family: MyHelvetica;
  src: local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url(MgOpenModernaBold.ttf);
  font-weight: bold;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].style); //a CSSStyleDeclaration
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
