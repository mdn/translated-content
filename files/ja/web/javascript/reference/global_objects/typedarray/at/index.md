---
title: TypedArray.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/at
l10n:
  sourceCommit: a815a95e4ab4adf391d8a7bc66a3abbce1a686d8
---

{{JSRef}}

**`at()`** は {{jsxref("TypedArray")}} インスタンスのメソッドで整数値を受け取り、そのインデックスにある項目を返します。整数値には正の整数と負の整数が使用できます。負の整数の場合は、この型付き配列の末尾の項目から前に数えます。このメソッドは {{jsxref("Array.prototype.at()")}} と同じアルゴリズムです。

{{EmbedInteractiveExample("pages/js/typedarray-at.html")}}

## 構文

```js-nolint
at(index)
```

### 引数

- `index`
  - : 返される型付き配列要素のゼロ基点のインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。負の添字を使用した場合は、型付き配列の末尾から逆に数えた位置です。 `index < 0` であれば、 `index + array.length` がアクセスされます。

### 返値

指定されたインデックスに一致する型付き配列の要素です。 `index < -array.length` または `index >= array.length` の場合は、対応するプロパティにアクセスしようとせずに常に {{jsxref("undefined")}} を返します。

## 解説

詳細は {{jsxref("Array.prototype.at()")}} を参照してください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 型付き配列の最後の値を返す

次の例は、指定した配列の中で最後に見つかった要素を返す関数を提供する例です。

```js
const uint8 = new Uint8Array([1, 2, 4, 7, 11, 18]);

// 指定された配列の最後の項目を返す関数です。
function returnLast(arr) {
  return arr.at(-1);
}

const lastItem = returnLast(uint8);
console.log(lastItem); // 18
```

### メソッドの比較

ここでは、 {{jsxref("TypedArray")}} の最後から 2 番目の項目を選択するさまざまな方法を比較しています。以下に示すどの方法も有効ですが、`at()` メソッドの簡潔さと読みやすさが際立っています。

```js
// Our typed array with values
const uint8 = new Uint8Array([1, 2, 4, 7, 11, 18]);

// Using length property
const lengthWay = uint8[uint8.length - 2];
console.log(lengthWay); // 11

// Using slice() method. Note an array is returned
const sliceWay = uint8.slice(-2, -1);
console.log(sliceWay[0]); // 11

// Using at() method
const atWay = uint8.at(-2);
console.log(atWay); // 11
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`TypedArray.prototype.at` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#relative-indexing-method)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.with()")}}
- {{jsxref("Array.prototype.at()")}}
- {{jsxref("String.prototype.at()")}}
