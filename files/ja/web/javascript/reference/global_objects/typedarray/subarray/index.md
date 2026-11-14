---
title: TypedArray.prototype.subarray()
short-title: subarray()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/subarray
l10n:
  sourceCommit: 05b21c9303964f221febe77f053e5636f230afe9
---

**`subarray()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、同じ {{jsxref("ArrayBuffer")}} ストアにおいて、この型付き配列オブジェクトと同じ要素の型をもつ新しい型付き配列を返します。先頭のオフセットは**含み**、末尾のオフセットは**含みません**。

{{InteractiveExample("JavaScript デモ: TypedArray.prototype.subarray()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

console.log(uint8.subarray(1, 3));
// 予想される結果: Uint8Array [20, 30]

console.log(uint8.subarray(1));
// 予想される結果: Uint8Array [20, 30, 40, 50]
```

## 構文

```js-nolint
subarray()
subarray(begin)
subarray(begin, end)
```

### 引数

- `begin` {{optional_inline}}
  - : 開始位置の要素です。このオフセットは範囲に含まれます。この値が指定されていない場合、配列全体が新しいビューに含まれます。
- `end` {{optional_inline}}
  - : 終了位置の要素です。このオフセットは範囲に含まれません。この値が指定されていない場合、 `begin` によって指定された要素から配列の最後まで、すべての要素が新しいビューに含まれます。

### 返値

新しい {{jsxref("TypedArray")}} オブジェクトです。

## 解説

`begin` と `end` によって指定される範囲は、現在の配列で有効なインデックスの範囲内に制限されます。新しい配列の計算された長さが負になる場合は、0 に制限されます。`begin` または `end` が負の場合は、配列の先頭ではなく末尾からのインデックスを参照します。

既存のバッファー上に新しいビューを作ることにも注意してください。新しいオブジェクトの内容を変更すると元のオブジェクトにも影響し、その逆も同様です。

## 例

### subarray() メソッドの使用

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
uint8.set([1, 2, 3]);

console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]

const sub = uint8.subarray(0, 4);

console.log(sub); // Uint8Array [ 1, 2, 3, 0 ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.subarray` のポリフィル (`core-js`)](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
