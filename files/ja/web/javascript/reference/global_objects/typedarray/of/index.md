---
title: TypedArray.of()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/of
l10n:
  sourceCommit: c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{JSRef}}

**`TypedArray.of()`** メソッドは、引数の変数番号から新しい[型付き配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)を生成します。このメソッドは {{jsxref("Array.of()")}} とほぼ同じです。

{{EmbedInteractiveExample("pages/js/typedarray-of.html", "shorter")}}

## 構文

```js-nolint
TypedArray.of()
TypedArray.of(element1)
TypedArray.of(element1, element2)
TypedArray.of(element1, element2, /* …, */ elementN)
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

- `element1`, …, `elementN`
  - : 型付き配列を作成するのに使われる要素です。

### 返値

新しい {{jsxref("TypedArray")}} のインスタンスです。

## 解説

詳細については、 {{jsxref("Array.of()")}} をご覧ください。 {{jsxref("Array.of()")}} と `TypedArray.of()` との間にはいくつか微妙な違いがあります。

- `TypedArray.of()` に渡された `this` の値がコンストラクターではなかった場合、 `TypedArray.of()` では {{jsxref("TypeError")}} が発生します。一方、 `Array.of()` は既定で新しい {{jsxref("Array")}} を生成します。
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
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.from()")}}
- {{jsxref("Array.of()")}}
