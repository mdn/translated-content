---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`Array.isArray()`** メソッドは、渡された値が {{jsxref("Array")}} かどうかを判断します。

```js
Array.isArray([1, 2, 3]); // true
Array.isArray({ foo: 123 }); // false
Array.isArray("foobar"); // false
Array.isArray(undefined); // false
```

## 構文

```js
Array.isArray(value);
```

### 引数

- `value`
  - : チェックするオブジェクト。

### 返値

この値が {{jsxref("Array")}} の場合は `true` です。そうでなければ `false` を返します。

## 解説

値が {{jsxref("Array")}} の場合は `true` が返ります。それ以外の場合は `false` が返ります。

詳しくは、 ["Determining with absolute accuracy whether or not a JavaScript object is an array"](https://web.mit.edu/jwalden/www/isArray.html) を参照してください。
{{jsxref("TypedArray")}} のインスタンスが与えられると、常に `false` が返されます。

## 例

### Array.isArray の使用

```js
// 以下の呼び出しはすべて true を返します
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
// あまり知られていないものの Array.prototype は配列です
Array.isArray(Array.prototype);

// 以下の呼び出しはすべて false を返します
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
Array.isArray({ __proto__: Array.prototype });
```

### `instanceof` と `isArray`

`Array` のインスタンスをチェックする際、`Array.isArray` は `iframes` で動作するので、`instanceof` よりも推奨されます。

```js
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length - 1].Array;
const arr = new xArray(1, 2, 3); // [1,2,3]

// 配列を正しくチェックできます
Array.isArray(arr); // true
// iframe を介して配列を正しくチェックできません
arr instanceof Array; // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.isArray` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [ポリフィル](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
- {{jsxref("Array")}}
