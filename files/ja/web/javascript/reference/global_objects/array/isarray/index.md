---
title: Array.isArray()
short-title: isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Array.isArray()`** 静的メソッドは、渡された値が {{jsxref("Array")}} かどうかを判断します。

{{InteractiveExample("JavaScript デモ: Array.isArray()")}}

```js interactive-example
console.log(Array.isArray([1, 3, 5]));
// 予想される結果: true

console.log(Array.isArray("[]"));
// 予想される結果: false

console.log(Array.isArray(new Array(5)));
// 予想される結果: true

console.log(Array.isArray(new Int16Array([15, 33])));
// 予想される結果: false
```

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

`Array.isArray()` は、渡された値が {{jsxref("Array")}} であるかどうかを調べます。これは、 [`in`](/ja/docs/Web/JavaScript/Reference/Operators/in) 演算子と同様に、 {{jsxref("Array/Array", "Array()")}} コンストラクターによって初期化されたプライベートフィールドに対して「ブランドチェック」を行います。

これは、誤検知や誤検出を避けることができるため、 [`instanceof Array`](/ja/docs/Web/JavaScript/Reference/Operators/instanceof) のより堅牢な代替手段となります。

- `Array.isArray()` は、プロトタイプチェーンに `Array.prototype` がある場合でも、実際の `Array` インスタンスではない値を拒否します。 `instanceof Array` はプロトタイプチェーンを調べるため、これらの値を受け入れます。
- `Array.isArray()` は、別の領域で構築された `Array` オブジェクトを受け入れます。`instanceof Array` は、`Array` コンストラクターの ID が領域間で異なるため、これらのオブジェクトに対して `false` を返します。

詳しくは、 ["Determining with absolute accuracy whether or not a JavaScript object is an array"](https://web.mit.edu/jwalden/www/isArray.html) を参照してください。

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
- [es-shims による `Array.isArray` のポリフィル](https://www.npmjs.com/package/array.isarray)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
