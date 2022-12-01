---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
---

{{JSRef}} {{deprecated_header}}

**`small()`** メソッドは、文字列が小さなフォントで表示されるように HTML の {{HTMLElement("small")}} 要素を生成します。

## 構文

```js
small()
```

### 返値

HTML の {{HTMLElement("small")}} 要素を含む文字列です。

## 解説

`small()` メソッドは、文字列を `<small>` 要素の中に、 "`<small>str</small>`" のように埋め込みます。

## 例

### small() の使用

以下の例では文字列のメソッドを使用して、文字列の大きさを変更しています。

```js
var worldString = 'Hello, world';

console.log(worldString.small());     // <small>Hello, world</small>
console.log(worldString.big());       // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</fontsize>
```

{{domxref("HTMLElement/style", "element.style")}} オブジェクトを使用すると、要素の `style` 属性を使用して、次のようにもっと汎用的に操作することができます。

```js
document.getElementById('yourElemId').style.fontSize = '0.7em';
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `String.prototype.small` のポリフィルは [`core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp) で利用できます
- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.big()")}}
