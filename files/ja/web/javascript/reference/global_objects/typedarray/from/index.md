---
title: TypedArray.from()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/from
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

**`TypedArray.from()`** メソッドは、配列風オブジェクトや反復可能オブジェクトから新しい[型付き配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)を生成します。このメソッドは {{jsxref("Array.from()")}} とほぼ同じです。

{{InteractiveExample("JavaScript デモ: TypedArray.from()", "shorter")}}

```js interactive-example
const uint16 = Int16Array.from("12345");

console.log(uint16);
// Expected output: Int16Array [1, 2, 3, 4, 5]
```

## 構文

```js-nolint
TypedArray.from(arrayLike, mapFn)
TypedArray.from(arrayLike, mapFn, thisArg)
```

ここで `TypedArray` は次のいずれかです。

- {{jsxref("Int8Array")}}
- {{jsxref("Uint8Array")}}
- {{jsxref("Uint8ClampedArray")}}
- {{jsxref("Int16Array")}}
- {{jsxref("Uint16Array")}}
- {{jsxref("Int32Array")}}
- {{jsxref("Uint32Array")}}
- {{jsxref("Float32Array")}}
- {{jsxref("Float64Array")}}
- {{jsxref("BigInt64Array")}}
- {{jsxref("BigUint64Array")}}

### 引数

- `arrayLike`
  - : 型付き配列に変換する反復可能または配列風オブジェクトです。
- `mapFn` {{optional_inline}}
  - : 型付き配列の各要素に対して呼び出す関数です。指定された場合、配列に追加するすべての値は最初にこの関数に渡され、代わりに `mapFn` の返値が型付き配列に追加されます。この関数は以下の引数で呼び出されます。
    - `element`
      - : 現在処理されている型付き配列の要素です。
    - `index`
      - : 現在処理されている型付き配列の要素のインデックスです。
- `thisArg` {{optional_inline}}
  - : `mapFn` を実行するときに `this` として使う値です。

### 返値

新しい {{jsxref("TypedArray")}} インスタンスです。

## 解説

詳しくは {{jsxref("Array.from()")}} をご覧ください。

{{jsxref("Array.from()")}} と `TypedArray.from()` の間には微妙な違いがあります（メモ: 下記で言及する `this` 値は `TypedArray.from()` が呼び出された `this` 値であり、 `mapFn` を呼び出すために用いた `thisArg` 引数ではありません）。

- `TypedArray.from()` に渡された `this` の値がコンストラクターではなかった場合、 `TypedArray.from()` で {{jsxref("TypeError")}} が発生します。それに対して `Array.from()` が既定で新しい {{jsxref("Array")}} を生成します。
- `this` で構築されるオブジェクトは `TypedArray` インスタンスでなければなりませんが、 `Array.from()` は `this` の値を任意のオブジェクトに構築することができます。
- 引数 `source` がイテレーターの場合、 `TypedArray.from()` は最初にイテレーターからすべての値を収集し、次にそのカウントを使用して `this` のインスタンスを作成し、最後にそのインスタンスに値を設定します。 `Array.from()` はイテレーターから値を受け取るとそれぞれの値を設定し、最後に `length` を設定します。
- `TypedArray.from()` は `[[Set]]` を使用します。 `Array.from()` は `[[DefineOwnProperty]]` を使用します。 従って {{jsxref("Proxy")}} オブジェクトを使っている場合は、新しい要素を追加するときに [`handler.set()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) が [`handler.defineProperty()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) の代わりに呼び出されます。
- `Array.from()` がイテレーターではない配列風オブジェクトを受け取ったときは、穴をそのまま残します。 `TypedArray.from()` は必ず密配列 (dense array) を生成します。

## 例

### 反復可能オブジェクトから (Set)

```js
const s = new Set([1, 2, 3]);
Uint8Array.from(s);
// Uint8Array [ 1, 2, 3 ]
```

### 文字列から

```js
Int16Array.from("123");
// Int16Array [ 1, 2, 3 ]
```

### アロー関数と map の使用

アロー関数をマップ関数として使用して要素を操作します。

```js
Float32Array.from([1, 2, 3], (x) => x + x);
// Float32Array [ 2, 4, 6 ]
```

### 数列を生成する

```js
Uint8Array.from({ length: 5 }, (v, k) => k);
// Uint8Array [ 0, 1, 2, 3, 4 ]
```

### TypedArray 以外のコンストラクターに対する from() の呼び出し

`from()` の `this` 値は `TypedArray` インスタンスを返すコンストラクターでなければなりません。

```js
function NotArray(len) {
  console.log("NotArray called with length", len);
}

Int8Array.from.call({}, []); // TypeError: #<Object> is not a constructor
Int8Array.from.call(NotArray, []);
// NotArray called with length 0
// TypeError: Method %TypedArray%.from called on incompatible receiver #<NotArray>
```

```js
function NotArray2(len) {
  console.log("NotArray2 called with length", len);
  return new Uint8Array(len);
}
console.log(Int8Array.from.call(NotArray2, [1, 2, 3]));
// NotArray2 called with length 3
// Uint8Array(3) [ 1, 2, 3 ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.from` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.of()")}}
- {{jsxref("TypedArray.prototype.map()")}}
- {{jsxref("Array.from()")}}
