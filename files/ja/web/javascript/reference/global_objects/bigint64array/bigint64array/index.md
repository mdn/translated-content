---
title: BigInt64Array() コンストラクター
short-title: BigInt64Array()
slug: Web/JavaScript/Reference/Global_Objects/BigInt64Array/BigInt64Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`BigInt64Array()`** コンストラクターは、新しい {{jsxref("BigInt64Array")}} オブジェクトを生成します。初期化データが明示的に指定されていない場合、内容は `0n` に初期化されます。

## 構文

```js-nolint
new BigInt64Array()
new BigInt64Array(length)
new BigInt64Array(typedArray)
new BigInt64Array(object)

new BigInt64Array(buffer)
new BigInt64Array(buffer, byteOffset)
new BigInt64Array(buffer, byteOffset, length)
```

> [!NOTE]
> `BigInt64Array()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 付きでのみ構築できます。`new` なしで呼び出そうとすると、{{jsxref("TypeError")}} が発生します。

### 引数

[`TypedArray`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#引数)を参照してください。

### 例外

[`TypedArray`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#例外)を参照してください。

## 例

### BigInt64Array を生成するための様々な方法

```js
// 長さから
const bigint64 = new BigInt64Array(2);
bigint64[0] = 42n;
console.log(bigint64[0]); // 42n
console.log(bigint64.length); // 2
console.log(bigint64.BYTES_PER_ELEMENT); // 8

// 配列から
const x = new BigInt64Array([21n, 31n]);
console.log(x[1]); // 31n

// 他の TypedArray から
const y = new BigInt64Array(x);
console.log(y[0]); // 21n

// ArrayBuffer から
const buffer = new ArrayBuffer(64);
const z = new BigInt64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// 反復可能オブジェクトから
const iterable = (function* () {
  yield* [1n, 2n, 3n];
})();
const bigint64FromIterable = new BigInt64Array(iterable);
console.log(bigint64FromIterable);
// BigInt64Array [1n, 2n, 3n]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
