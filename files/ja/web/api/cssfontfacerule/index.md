---
title: CSSFontFaceRule
slug: Web/API/CSSFontFaceRule
l10n:
  sourceCommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{APIRef("CSSOM")}}

**`CSSFontFaceRule`** インターフェイスは {{cssxref("@font-face")}} [アットルール](/ja/docs/Web/CSS/At-rule)を表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_祖先である {{domxref("CSSRule")}} からプロパティを継承しています。_

- {{domxref("CSSFontFaceRule.style")}} {{ReadOnlyInline}}
  - : {{domxref("CSSStyleDeclaration")}} を返します。

## インスタンスメソッド

_祖先である {{domxref("CSSRule")}} からメソッドを継承しています。_

## 例

この例では、 {{cssxref("@font-face")}} ページに例として挙げられている CSS を使用しています。最初に返される {{domxref("CSSRule")}} は `CSSFontFaceRule` になります。

```css
@font-face {
  font-family: MyHelvetica;
  src:
    local("Helvetica Neue Bold"), local("HelveticaNeue-Bold"),
    url(MgOpenModernaBold.ttf);
  font-weight: bold;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); //a CSSFontFaceRule
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
