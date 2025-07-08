---
title: TypedArray.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

**`lastIndexOf()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、指定された要素が型付き配列内で見つかった最後の位置のインデックスを返し、存在しなければ -1 を返します。型付き配列は `fromIndex` で始まる位置から逆方向に検索されます。 このメソッドは {{jsxref("Array.prototype.lastIndexOf()")}} と同じアルゴリズムです。

{{InteractiveExample("JavaScript デモ: TypedArray.lastIndexOf()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 50, 50, 50, 60]);

console.log(uint8.lastIndexOf(50, 5));
// Expected output: 4

console.log(uint8.lastIndexOf(50, 3));
// Expected output: 3
```

## 構文

```js-nolint
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
```

### 引数

- `searchElement`
  - : 型付き配列内で検索する要素。
- `fromIndex` {{optional_inline}}
  - : 検索を始める位置を示すゼロ基点のインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。

### 返値

型付き配列内における最後の `searchElement` のインデックスです。見つからなかったら `-1` になります。

## 解説

詳細については、 {{jsxref("Array.prototype.lastIndexOf()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### lastIndexOf() の使用

```js
const uint8 = new Uint8Array([2, 5, 9, 2]);
uint8.lastIndexOf(2); // 3
uint8.lastIndexOf(7); // -1
uint8.lastIndexOf(2, 3); // 3
uint8.lastIndexOf(2, 2); // 0
uint8.lastIndexOf(2, -2); // 0
uint8.lastIndexOf(2, -1); // 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.lastIndexOf` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
