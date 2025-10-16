---
title: Float16Array() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Float16Array/Float16Array
l10n:
  sourceCommit: dd339290fa3a42d9a7f079e17a62e1df1206f29d
---

{{JSRef}}

**`Float16Array()`** コンストラクターは {{jsxref("Float16Array")}} オブジェクトを生成します。初期化データが明示的に与えられない限り、中身は `0` に初期化されます。

## 構文

```js-nolint
new Float16Array()
new Float16Array(length)
new Float16Array(typedArray)
new Float16Array(object)

new Float16Array(buffer)
new Float16Array(buffer, byteOffset)
new Float16Array(buffer, byteOffset, length)
```

> [!NOTE]
> `Float16Array()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) でのみ構築できます。`new` なしで呼び出そうとすると {{jsxref("TypeError")}} がスローされます。

### 引数

[`TypedArray#引数`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#引数) を参照してください。

### 例外

[`TypedArray#例外`](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#例外) を参照してください。

## 例

### Float16Array を作成する様々な方法

```js
// From a length
const float16 = new Float16Array(2);
float16[0] = 42;
console.log(float16[0]); // 42
console.log(float16.length); // 2
console.log(float16.BYTES_PER_ELEMENT); // 2

// From an array
const x = new Float16Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Float16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(32);
const z = new Float16Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const float16FromIterable = new Float16Array(iterable);
console.log(float16FromIterable);
// Float16Array [1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
