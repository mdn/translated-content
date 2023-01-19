---
title: CSSStyleDeclaration.item()
slug: Web/API/CSSStyleDeclaration/item
---

{{ APIRef("CSSOM") }}

`CSSStyleDeclaration.item()` メソッドインターフェイスは、位置を指定して {{domxref('CSSStyleDeclaration')}} の CSS プロパティ名を返します。このメソッドは与えた値による例外が発生しません。位置が範囲外だった場合は空文字列が返され、引数が与えられなかった場合は `TypeError` が発生します。

## 構文

```js
var propertyName = style.item(index);
```

### 引数

- _`index`_ は読み取るノードの位置です。位置は 0 から始まります。

### 返値

- _`propertyName`_ は {{domxref('DOMString')}} で、指定された位置にある CSS プロパティの名前を返します。

JavaScript には、 NodeList から位置を指定して項目を取得するための簡単な特別な構文があります。

```js
var propertyName = style[index];
```

## 例

```js
var style = document.getElementById('div1').style;
var propertyName = style.item(1); // または style[1] - リスト中の 2 番目のスタイルを返します
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
