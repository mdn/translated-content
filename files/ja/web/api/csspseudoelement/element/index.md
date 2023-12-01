---
title: "CSSPseudoElement: element プロパティ"
short-title: element
slug: Web/API/CSSPseudoElement/element
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef}}{{SeeCompatTable}}

**`element`** は {{DOMxRef('CSSPseudoElement')}} インターフェイスの読み取り専用のプロパティで、擬似要素の元要素、言い換えれば親要素への参照を返します。

## 値

この擬似要素の元要素を表す {{DOMxRef('Element')}} です。

## 例

下記の例は、 `CSSPseudoElement.element` と {{DOMxRef('Element.pseudo()')}} の関係を示しています。

```js
const myElement = document.querySelector("q");
const cssPseudoElement = myElement.pseudo("::after");
const originatingElement = cssPseudoElement.element;

console.log(myElement === originatingElement); // true を出力
console.log(myElement.parentElement === originatingElement); // false を出力
console.log(myElement.lastElementChild === cssPseudoElement); // false を出力
console.log(myElement.lastChild === cssPseudoElement); // false を出力
console.log(myElement.nextElementSibling === cssPseudoElement); // false を出力
console.log(myElement.nextSibling === cssPseudoElement); // false を出力
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef('Element.pseudo()')}}
