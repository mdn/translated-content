---
title: CSSStyleDeclaration.item()
slug: Web/API/CSSStyleDeclaration/item
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{ APIRef("CSSOM") }}

`CSSStyleDeclaration.item()` メソッドインターフェイスは、{{domxref('CSSStyleDeclaration')}} の指定した位置の CSS プロパティ名を返します。

このメソッドは、与えた引数によって例外が発生することはありません。位置が範囲外だった場合は空文字列が返され、引数が与えられなかった場合は {{jsxref("TypeError")}} が発生します。

## 構文

```js-nolint
item(index)
```

### 引数

- `index`
  - : 読み取るノードの位置です。位置は 0 から始まります。

### 返値

文字列で、指定された位置にある CSS プロパティの名前を返します。

JavaScript には、 NodeList から位置を指定して項目を取得するための簡単な特別な構文があります。

```js
const propertyName = style[index];
```

### 例外

- {{jsxref("TypeError")}}
  - : 引数が与えられなかった場合に発生します。

## 例

```js
const style = document.getElementById("div1").style;
const propertyName = style.item(1); // または style[1] - リスト中の 2 番目のスタイルを返します
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
