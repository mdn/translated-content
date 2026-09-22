---
title: Float64Array() コンストラクター
short-title: Float64Array()
slug: Web/JavaScript/Reference/Global_Objects/Float64Array/Float64Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Float64Array()`** コンストラクターは、新しい {{jsxref("Float64Array")}} オブジェクトを作成します。初期化データが明示的に指定されていない場合、内容は `0` に初期化されます。

## 構文

```js-nolint
new Float64Array()
new Float64Array(length)
new Float64Array(typedArray)
new Float64Array(object)

new Float64Array(buffer)
new Float64Array(buffer, byteOffset)
new Float64Array(buffer, byteOffset, length)
```

> [!NOTE]
> `Float64Array()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 付きでのみ構築できます。`new` なしで呼び出そうとすると、{{jsxref("TypeError")}} が発生します。

### 引数

[`TypedArray`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#引数)を参照してください。

### 例外

[`TypedArray`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#例外)を参照してください。

## 例

### Float64Array を生成するための様々な方法

```js
// 長さから
const float64 = new Float64Array(2);
float64[0] = 42;
console.log(float64[0]); // 42
console.log(float64.length); // 2
console.log(float64.BYTES_PER_ELEMENT); // 8

// 配列から
const x = new Float64Array([21, 31]);
console.log(x[1]); // 31

// 他の TypedArray から
const y = new Float64Array(x);
console.log(y[0]); // 21

// ArrayBuffer から
const buffer = new ArrayBuffer(64);
const z = new Float64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// 反復可能オブジェクトから
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const float64FromIterable = new Float64Array(iterable);
console.log(float64FromIterable);
// Float64Array [1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Float64Array` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
