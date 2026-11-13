---
title: Int32Array() コンストラクター
short-title: Int32Array()
slug: Web/JavaScript/Reference/Global_Objects/Int32Array/Int32Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Int32Array()`** コンストラクターは、新しい {{jsxref("Int32Array")}} オブジェクトを生成します。初期化データが明示的に指定されていない場合、内容は `0` に初期化されます。

## 構文

```js-nolint
new Int32Array()
new Int32Array(length)
new Int32Array(typedArray)
new Int32Array(object)

new Int32Array(buffer)
new Int32Array(buffer, byteOffset)
new Int32Array(buffer, byteOffset, length)
```

> [!NOTE]
> `Int32Array()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 付きでのみ構築できます。`new` なしで呼び出そうとすると、{{jsxref("TypeError")}} が発生します。

### 引数

[`TypedArray`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#引数)を参照してください。

### 例外

[`TypedArray`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#例外)を参照してください。

## 例

### 様々な方法による Int32Array の生成

```js
// 長さから
const int32 = new Int32Array(2);
int32[0] = 42;
console.log(int32[0]); // 42
console.log(int32.length); // 2
console.log(int32.BYTES_PER_ELEMENT); // 4

// 配列から
const x = new Int32Array([21, 31]);
console.log(x[1]); // 31

// 他の TypedArray から
const y = new Int32Array(x);
console.log(y[0]); // 21

// ArrayBuffer から
const buffer = new ArrayBuffer(32);
const z = new Int32Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// 反復可能オブジェクトから
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int32FromIterable = new Int32Array(iterable);
console.log(int32FromIterable);
// Int32Array [1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Int32Array` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
