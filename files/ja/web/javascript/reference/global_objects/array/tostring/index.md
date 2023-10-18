---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`toString()`** メソッドは、指定された配列とその要素を表す文字列を返します。

{{EmbedInteractiveExample("pages/js/array-tostring.html","shorter")}}

## 構文

```js
toString();
```

### 返値

配列の要素の文字列表現です。

## 解説

{{jsxref("Array")}} オブジェクトは {{jsxref("Object")}} の `toString` メソッドをオーバーライドしています。配列の `toString` メソッドは内部的に [`join()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join) を呼び出します。そちらで配列を結合し、配列のすべての要素をカンマで区切って一つの文字列に収めて返します。 `join` メソッドが利用できないか関数ではなかった場合、代わりに [`Object.prototype.toString`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) が使用され、 `[object Array]` を返します。

```js
const arr = [];
arr.join = 1; // `join` を関数ではないものに再代入
console.log(arr.toString()); // [object Array] と出力

console.log(Array.prototype.toString.call({ join: () => 1 })); // 1 と出力
```

配列を文字列値として表す必要がある場合や、配列が文字列の結合として参照されるとき、 JavaScript は `toString` メソッドを自動的に呼び出します。

## 例

### toString の使用

```js
const array1 = [1, 2, "a", "1a"];

console.log(array1.toString());
// 期待される出力: "1,2,a,1a"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Array.prototype.join()")}}
