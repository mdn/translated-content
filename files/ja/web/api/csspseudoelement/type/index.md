---
title: "CSSPseudoElement: type プロパティ"
short-title: type
slug: Web/API/CSSPseudoElement/type
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef}}{{SeeCompatTable}}

**`type`** は {{DOMxRef('CSSPseudoElement')}} インターフェイスの読み取り専用プロパティで、擬似要素の型を [CSS セレクター](/ja/docs/Web/CSS/CSS_selectors#pseudo-elements)の形の文字列で表します。

## 値

以下の値のいずれかを格納する文字列です。

- {{CSSxRef('::before', '"::before"')}}
- {{CSSxRef('::after', '"::after"')}}
- {{CSSxRef('::marker', '"::marker"')}}

## 例

下記の例は、 `CSSPseudoElement.type` と {{DOMxRef('Element.pseudo()')}} の関係を示しています。

```js
const myElement = document.querySelector("q");
const mySelector = "::after";
const cssPseudoElement = myElement.pseudo(mySelector);
const typeOfPseudoElement = cssPseudoElement.type;

console.log(mySelector === typeOfPseudoElement); // true を出力
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef('Element.pseudo()')}}
- [標準的な擬似要素の索引](/ja/docs/Web/CSS/Pseudo-elements#標準的な擬似要素の索引)
