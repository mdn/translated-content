---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
browser-compat: javascript.builtins.Array.toString
translation_of: Web/JavaScript/Reference/Global_Objects/Array/toString
---
{{JSRef}}

**`toString()`** メソッドは、指定された配列とその要素を表す文字列を返します。

{{EmbedInteractiveExample("pages/js/array-tostring.html","shorter")}}

## 構文

```js
toString()
```

### 返値

配列の要素の文字列表現です。

## 解説

{{jsxref("Array")}} オブジェクトは {{jsxref("Object")}} の `toString` メソッドをオーバーライドしています。Array オブジェクトでは、`toString` メソッドは配列をつないで、配列のそれぞれの要素がカンマで区切られた 1 つの文字列を返します。

配列を文字列値として表す必要がある場合や、配列が文字列の結合として参照されるとき、JavaScript は `toString` メソッドを自動的に呼び出します。

### ECMAScript 5 でのセマンティック

JavaScript 1.8.5 (Firefox 4) 以降、および ECMAScript 第 5 版では、`toString()` メソッドは一般化されており、すべてのオブジェクトで使用可能となっています。{{jsxref("Object.prototype.toString()")}} が呼び出され、その結果の値が返されます。

## 例

### toString の使用

```js
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// 期待される出力: "1,2,a,1a"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Object.prototype.toSource()")}}
