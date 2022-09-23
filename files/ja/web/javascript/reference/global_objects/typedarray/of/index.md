---
title: TypedArray.of()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/of
---

{{JSRef}}

**`TypedArray.of()`** メソッドは、様々な数の引数をもつ新しい[型付き配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)を生成します。このメソッドは {{jsxref("Array.of()")}} とほぼ同じです。

{{EmbedInteractiveExample("pages/js/typedarray-of.html","shorter")}}

## 構文

```
TypedArray.of(element0[, element1[, ...[, elementN]]])
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
- `TypedArray.of()` は `[[Put]]` を使用するのに対し、 `Array.of()` は `[[DefineProperty]]` を使用します。従って {{jsxref("Proxy")}} オブジェクトを使っている場合は、新しい要素を追加するときに {{jsxref("Global_Objects/Proxy/handler/defineProperty", "handler.defineProperty()")}} ではなく {{jsxref("Global_Objects/Proxy/handler/set", "handler.set")}} が呼び出されます。

## 例

### of() の使用

```js
Uint8Array.of(1);            // Uint8Array [ 1 ]
Int8Array.of('1', '2', '3'); // Int8Array [ 1, 2, 3 ]
Float32Array.of(1, 2, 3);    // Float32Array [ 1, 2, 3 ]
Int16Array.of(undefined);    // Int16Array [ 0 ]
```

## 仕様書

| 仕様書                                                                                   |
| ---------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-%typedarray%.of', '%TypedArray%.of')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray.of")}}

## 関連情報

- {{jsxref("TypedArray.from()")}}
- {{jsxref("Array.of()")}}
