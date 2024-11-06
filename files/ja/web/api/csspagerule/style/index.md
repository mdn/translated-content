---
title: CSSPageRule.style
slug: Web/API/CSSPageRule/style
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("CSSOM")}}

**`style`** は {{domxref("CSSPageRule")}} インターフェイスの読み取り専用プロパティで、 {{domxref("CSSStyleDeclaration")}} オブジェクトを返します。これは [CSS 宣言ブロック](/ja/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)であるオブジェクトを表し、スタイル情報や様々なスタイル関係のメソッドとプロパティを公開します。

## 値

{{domxref("CSSStyleDeclaration")}} オブジェクトで、 [CSS 宣言ブロック](/ja/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)を以下のプロパティで表します。

- computed flag
  - : 未設定。
- declarations
  - : ルール内で宣言された宣言は、指定された順に、一括指定プロパティを個別指定に展開されます。
- parent CSS rule
  - : コンテキストオブジェクト、すなわち [this](https://heycam.github.io/webidl/#this) の別名です。
- owner node
  - : Null です。

## 例

このスタイルシートは {{cssxref("@page")}} ルールを含んでいます。ルールのリストを取得し、 style プロパティの値を返すと、{{domxref("CSSStyleDeclaration")}} オブジェクトが返されます。

```css
@page {
  margin: 1cm;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].style); // CSSStyleDeclaration オブジェクトを返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
