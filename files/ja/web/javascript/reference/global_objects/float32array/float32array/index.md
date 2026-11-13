---
title: Float32Array() コンストラクター
short-title: Float32Array()
slug: Web/JavaScript/Reference/Global_Objects/Float32Array/Float32Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Float32Array()`** コンストラクターは、新しい {{jsxref("Float32Array")}} オブジェクトを作成します。初期化データが明示的に指定されていない場合、内容は `0` に初期化されます。

## 構文

```js-nolint
new Float32Array()
new Float32Array(length)
new Float32Array(typedArray)
new Float32Array(object)

new Float32Array(buffer)
new Float32Array(buffer, byteOffset)
new Float32Array(buffer, byteOffset, length)
```

> [!NOTE]
> `Float32Array()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 付きでのみ構築できます。`new` なしで呼び出そうとすると、{{jsxref("TypeError")}} が発生します。

### 引数

[`TypedArray`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#引数)を参照してください。

### 例外

[`TypedArray`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#例外)を参照してください。

## 例

### Float32Array を生成するための様々な方法

```js
// 長さから
const float32 = new Float32Array(2);
float32[0] = 42;
console.log(float32[0]); // 42
console.log(float32.length); // 2
console.log(float32.BYTES_PER_ELEMENT); // 4

// 配列から
const x = new Float32Array([21, 31]);
console.log(x[1]); // 31

// 他の TypedArray から
const y = new Float32Array(x);
console.log(y[0]); // 21

// ArrayBuffer から
const buffer = new ArrayBuffer(32);
const z = new Float32Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// 反復可能オブジェクトから
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const float32FromIterable = new Float32Array(iterable);
console.log(float32FromIterable);
// Float32Array [1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Float32Array` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
