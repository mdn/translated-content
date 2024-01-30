---
title: TypedArray.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

**`indexOf()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、指定された要素が型付き配列内で見つかった最初のインデックスを返し、存在しなければ -1 を返します。このメソッドは {{jsxref("Array.prototype.indexOf()")}} と同じアルゴリズムです。

{{EmbedInteractiveExample("pages/js/typedarray-indexof.html")}}

## 構文

```js-nolint
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

### 引数

- `searchElement`
  - : 型付き配列内を検索する要素。
- `fromIndex` {{optional_inline}}
  - : 検索を始める位置を示すゼロ基点のインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。

### 返値

型付き配列内の最初の `searchElement` のインデックスです。見つからなかったら `-1` になります。

## 解説

詳細については、 {{jsxref("Array.prototype.indexOf()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### indexOf() の使用

```js
const uint8 = new Uint8Array([2, 5, 9]);
uint8.indexOf(2); // 0
uint8.indexOf(7); // -1
uint8.indexOf(9, 2); // 2
uint8.indexOf(2, -1); // -1
uint8.indexOf(2, -3); // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.indexOf` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
