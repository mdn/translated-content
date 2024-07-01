---
title: TypedArray.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/join
l10n:
  sourceCommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{JSRef}}

**`join()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで、この型付き配列のすべての要素を、カンマまたは指定する区切り文字で連結して新しい文字列を作成して返します。型付き配列に 1 つの項目しかない場合、その項目は区切り文字を使用せずに返します。このメソッドのアルゴリズムは {{jsxref("Array.prototype.join()")}} と同じです。

{{EmbedInteractiveExample("pages/js/typedarray-join.html")}}

## 構文

```js-nolint
join()
join(separator)
```

### 引数

- `separator` {{optional_inline}}
  - : 配列の各要素を区切る文字列を指定します。 `separator` は、必要であれば文字列に変換されます。省略した場合、配列の要素はカンマ (",") で区切られます。

### 返値

型付き配列の要素をすべて連結した文字列です。 `array.length` が `0` の場合は空文字列を返します。

## 解説

詳細については、 {{jsxref("Array.prototype.join()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### join() の使用

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.join(); // '1,2,3'
uint8.join(" / "); // '1 / 2 / 3'
uint8.join(""); // '123'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.join` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.toString()")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("String.prototype.split()")}}
