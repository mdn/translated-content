---
title: TypedArray.of()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/of
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`TypedArray.of()`** メソッドは、引数の変数番号から新しい[型付き配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)を生成します。このメソッドは {{jsxref("Array.of()")}} とほぼ同じです。

{{EmbedInteractiveExample("pages/js/typedarray-of.html","shorter")}}

## 構文

```js-nolint
TypedArray.of(element0)
TypedArray.of(element0, element1)
TypedArray.of(element0, element1, /* ... ,*/ elementN)
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

- `elementN`
  - : 型付き配列を生成するときの構成する要素。

### 返値

新しい {{jsxref("TypedArray")}} のインスタンスです。

## 解説

{{jsxref("Array.of()")}} と `TypedArray.of()` との間にいくつかの微妙な違いがあります。

- `TypedArray.of()` に渡された `this` の値がコンストラクターではなかった場合、 `TypedArray.of()` で {{jsxref("TypeError")}} が発生します。これは `Array.of()` が既定で新しい {{jsxref("Array")}} を生成するためです。
- `TypedArray.of()` は `[[Set]]` を使用するのに対し、 `Array.of()` は `[[DefineProperty]]` を使用します。従って {{jsxref("Proxy")}} オブジェクトを使っている場合は、新しい要素を追加するときに [`handler.set()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set) が [`handler.defineProperty()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) の代わりに呼び出されます。

## 例

### of() の使用

```js
Uint8Array.of(1); // Uint8Array [ 1 ]
Int8Array.of("1", "2", "3"); // Int8Array [ 1, 2, 3 ]
Float32Array.of(1, 2, 3); // Float32Array [ 1, 2, 3 ]
Int16Array.of(undefined); // Int16Array [ 0 ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.of` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.from()")}}
- {{jsxref("Array.of()")}}
