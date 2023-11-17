---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`Array.isArray()`** 静的メソッドは、渡された値が {{jsxref("Array")}} かどうかを判断します。

{{EmbedInteractiveExample("pages/js/array-isarray.html")}}

## 構文

```js-nolint
Array.isArray(value)
```

### 引数

- `value`
  - : チェックするオブジェクト。

### 返値

`value` が {{jsxref("Array")}} の場合は `true` です。そうでなければ `false` を返します。 `value` が {{jsxref("TypedArray")}} インスタンスであった場合は常に `false` を返します。

## 解説

`Array.isArray()` は、渡された値が {{jsxref("Array")}} であるかどうかを調べます。値のプロトタイプチェーンを調べたり、 `Array` コンストラクターに頼っているわけではありません。配列リテラル構文または `Array` コンストラクターを使用して作成した値に対しては `true` を返します。このため、 `Array` コンストラクターの ID が異なり、[`instanceof Array`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) が失敗してしまうような領域を超えるオブジェクトでも安全に使用することができます。

詳しくは、 ["Determining with absolute accuracy whether or not a JavaScript object is an array"](https://web.mit.edu/jwalden/www/isArray.html) を参照してください。

また、 `Array.isArray()` は `Array.prototype` をプロトタイプチェーンに持つオブジェクトも拒否しますが、 `instanceof Array` が受け入れる実際の配列ではありません。

## 例

### Array.isArray() の使用

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
// これは配列ではありません。配列リテラルを使用した構文でも、
// Array コンストラクターでもないからです。
Array.isArray({ __proto__: Array.prototype });
```

### instanceof と Array.isArray()

`Array` のインスタンスをチェックする際、 `Array.isArray` は領域を超えても動作するので、 `instanceof` よりも推奨されます。

```js
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const xArray = window.frames[window.frames.length - 1].Array;
const arr = new xArray(1, 2, 3); // [1, 2, 3]

// 配列を正しくチェックできます
Array.isArray(arr); // true
// arr のプロトタイプは xArray.prototype であり、
// Array.prototype とは異なるオブジェクトです。
arr instanceof Array; // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.isArray` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
