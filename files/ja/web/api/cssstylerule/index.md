---
title: CSSStyleRule
slug: Web/API/CSSStyleRule
l10n:
  sourceCommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{ APIRef("CSSOM") }}

**`CSSStyleRule`** は、単一の CSS スタイルルールを表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_祖先である {{domxref("CSSRule")}} からプロパティを継承しています。_

- {{domxref("CSSStyleRule.selectorText")}}
  - : このルールのセレクターのテキスト表現を返します。例: `"h1,h2"`
- {{domxref("CSSStyleRule.style")}} {{ReadOnlyInline}}
  - : このルールの {{domxref("CSSStyleDeclaration")}} オブジェクトを返します。
- {{domxref("CSSStyleRule.styleMap")}} {{ReadOnlyInline}}
  - : {{domxref('StylePropertyMap')}} オブジェクトを返し、これによってこのルールのプロパティと値の組へアクセスできます。

## インスタンスメソッド

_固有のメソッドはありません。祖先である {{domxref("CSSRule")}} からメソッドを継承しています。_

## 例

この CSS は 1 つのスタイルルールを含んでいます。これは最初の {{domxref("CSSRule")}} となり、 `document.styleSheets[0].cssRules` で返されます。
従って、 `myRules[0]` は `h1` を定義するルールを表す {{domxref("CSSStyleRule")}} オブジェクトを返します。

```css
h1 {
  color: pink;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // a CSSStyleRule representing the h1.
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
