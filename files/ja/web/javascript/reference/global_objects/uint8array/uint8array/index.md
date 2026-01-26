---
title: Uint8Array() コンストラクター
short-title: Uint8Array()
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/Uint8Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Uint8Array()`** コンストラクターは、 {{jsxref("Uint8Array")}} オブジェクトを作成します。初期化データが明示的に指定されていない場合、コンテンツは `0` に初期化されます。

## 構文

```js-nolint
new Uint8Array()
new Uint8Array(length)
new Uint8Array(typedArray)
new Uint8Array(object)

new Uint8Array(buffer)
new Uint8Array(buffer, byteOffset)
new Uint8Array(buffer, byteOffset, length)
```

> [!NOTE]
> `Uint8Array()` は、 [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を使用した場合のみ構築できます。 `new` を使用せずに呼び出すと、 {{jsxref("TypeError")}} が発生します。

### 引数

[`TypedArray`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#引数) を参照してください。

### 例外

[`TypedArray`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#例外) を参照してください。

## 例

### 様々な方法による Uint8Array の生成

```js
// 長さを指定
const uint8 = new Uint8Array(2);
uint8[0] = 42;
console.log(uint8[0]); // 42
console.log(uint8.length); // 2
console.log(uint8.BYTES_PER_ELEMENT); // 1

// 配列から
const x = new Uint8Array([21, 31]);
console.log(x[1]); // 31

// 他の型付き配列から
const y = new Uint8Array(x);
console.log(y[0]); // 21

// ArrayBuffer から
const buffer = new ArrayBuffer(8);
const z = new Uint8Array(buffer, 1, 4);
console.log(z.byteOffset); // 1

// 反復可能オブジェクトから
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint8FromIterable = new Uint8Array(iterable);
console.log(uint8FromIterable);
// Uint8Array [1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Uint8Array` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
