---
title: TypedArray.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
l10n:
  sourceCommit: 194d3e00cb93a6e5ea44812548f4131cb17f0381
---

{{JSRef}}

**`copyWithin()`** メソッドは、配列内の一連の配列の要素を `target` から始まる位置にコピーします。コピーは第 2、第 3の引数、 `start` と `end` の位置から実施されます。 `end` 引数はオプションで、既定では配列の長さです。このメソッドは {{jsxref("Array.prototype.copyWithin")}} と同じアルゴリズムです。 _TypedArray_ は、ここでは [型付き配列型](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_オブジェクト)のうちの一つです。

{{EmbedInteractiveExample("pages/js/typedarray-copywithin.html")}}

## 構文

```js-nolint
copyWithin(target, start)
copyWithin(target, start, end)
```

### 引数

- `target`
  - : 要素をコピーする対象の開始インデックス位置。
- `start`
  - : 要素をコピーし始める元の開始インデックス位置。
- `end` {{optional_inline}}
  - : オプション。要素をコピーし終わる元の終了インデックス位置。

### 返値

変更された配列です。

## 解説

詳細については、 {{jsxref("Array.prototype.copyWithin")}} をご覧ください

## 例

### copyWithin の使用

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
uint8.set([1, 2, 3]);
console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]
uint8.copyWithin(3, 0, 3);
console.log(uint8); // Uint8Array [ 1, 2, 3, 1, 2, 3, 0, 0 ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.copyWithin` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray")}}
