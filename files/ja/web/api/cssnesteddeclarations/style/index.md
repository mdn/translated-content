---
title: "CSSNestedDeclarations: style プロパティ"
short-title: style
slug: Web/API/CSSNestedDeclarations/style
l10n:
  sourceCommit: 0145c6497d2f2206dca1326593fe308f7b771a08
---

{{APIRef("CSSOM")}}

**`style`** は {{domxref("CSSNestedDeclarations")}} インターフェイスの読み取り専用プロパティで、入れ子になったルールに関連付けられたスタイルを表します。

## 値

オブジェクトです。

## 例

このスタイルシートには入れ子になった {{domxref("cssRule","cssRules")}} があります。

最初の `console.log` は最上位の `style` を示し、2 つ目は入れ子になった `@media` クエリーとそれに対応するスタイルを、最後は `@media` クエリー後に宣言された入れ子になったスタイルを表示します。

```css
.foo {
  font-size: 1.2rem;
  @media screen {
    color: tomato;
    background-color: darkgrey;
  }
  color: black;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0].style);
// { "0": "font-size" }
console.log(myRules[0].cssRules[0].cssRules[0].style);
// { "0": "color", "1": "background-color" }
console.log(myRules[0].cssRules[1].style);
// { "0": "color" }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CSSNestedDeclarations")}}
- [入れ子の宣言ルール](/ja/docs/Web/CSS/Guides/Nesting/Using#入れ子の宣言ルール)
