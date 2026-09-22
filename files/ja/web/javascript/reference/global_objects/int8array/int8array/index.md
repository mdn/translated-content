---
title: Int8Array() コンストラクター
short-title: Int8Array()
slug: Web/JavaScript/Reference/Global_Objects/Int8Array/Int8Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Int8Array()`** コンストラクターは、新しい {{jsxref("Int32Array")}} オブジェクトを生成します。初期化データが明示的に指定されていない場合、内容は `0` に初期化されます。

## 構文

```js-nolint
new Int8Array()
new Int8Array(length)
new Int8Array(typedArray)
new Int8Array(object)

new Int8Array(buffer)
new Int8Array(buffer, byteOffset)
new Int8Array(buffer, byteOffset, length)
```

> [!NOTE]
> `Int8Array()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 付きでのみ構築できます。`new` なしで呼び出そうとすると、{{jsxref("TypeError")}} が発生します。

### 引数

[`TypedArray`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#引数)を参照してください。

### 例外

[`TypedArray`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#例外)を参照してください。

## 例

### 様々な方法による Int8Array の生成

```js
// 長さから
const int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]); // 42
console.log(int8.length); // 2
console.log(int8.BYTES_PER_ELEMENT); // 1

// 配列から
const x = new Int8Array([21, 31]);
console.log(x[1]); // 31

// 他の型付き配列から
const y = new Int8Array(x);
console.log(y[0]); // 21

// ArrayBuffer から
const buffer = new ArrayBuffer(8);
const z = new Int8Array(buffer, 1, 4);
console.log(z.byteOffset); // 1

// 反復可能オブジェクトから
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int8FromIterable = new Int8Array(iterable);
console.log(int8FromIterable);
// Int8Array [1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Int8Array` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
