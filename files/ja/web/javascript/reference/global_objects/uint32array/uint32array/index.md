---
title: Uint32Array() コンストラクター
short-title: Uint32Array()
slug: Web/JavaScript/Reference/Global_Objects/Uint32Array/Uint32Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Uint32Array()`** コンストラクターは、新しい {{jsxref("Uint32Array")}} オブジェクトを生成します。初期化データが明示的に指定されていない場合、内容は `0` に初期化されます。

## 構文

```js-nolint
new Uint32Array()
new Uint32Array(length)
new Uint32Array(typedArray)
new Uint32Array(object)

new Uint32Array(buffer)
new Uint32Array(buffer, byteOffset)
new Uint32Array(buffer, byteOffset, length)
```

> [!NOTE]
> `Uint32Array()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 付きでのみ構築できます。`new` なしで呼び出そうとすると、{{jsxref("TypeError")}} が発生します。

### 引数

[`TypedArray`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#引数)を参照してください。

### 例外

[`TypedArray`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#例外)を参照してください。

## 例

### 様々な方法による Uint32Array の生成

```js
// 長さを指定
const uint32 = new Uint32Array(2);
uint32[0] = 42;
console.log(uint32[0]); // 42
console.log(uint32.length); // 2
console.log(uint32.BYTES_PER_ELEMENT); // 4

// 配列から
const x = new Uint32Array([21, 31]);
console.log(x[1]); // 31

// 他の型付き配列から
const y = new Uint32Array(x);
console.log(y[0]); // 21

// ArrayBuffer から
const buffer = new ArrayBuffer(32);
const z = new Uint32Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// 反復可能オブジェクトから
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint32FromIterable = new Uint32Array(iterable);
console.log(uint32FromIterable);
// Uint32Array [1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Uint32Array` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
