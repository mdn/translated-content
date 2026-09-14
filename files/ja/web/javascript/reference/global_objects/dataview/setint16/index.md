---
title: DataView.prototype.setInt16()
short-title: setInt16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt16
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`setInt16()`** は {{jsxref("DataView")}} インスタンスのメソッドで、数値を受け取り、符号付き 16 ビット整数として、この `DataView` の指定されたバイトオフセットから始まる 2 バイトに格納します。アラインメント制約はなく、マルチバイトの値は範囲内の任意のオフセットに格納できます。

{{InteractiveExample("JavaScript デモ: DataView.prototype.setInt16()")}}

```js interactive-example
// ArrayBuffer をバイト単位のサイズで作成
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt16(1, 32767); // 符号付き 16 ビット整数の最大値

console.log(view.getInt16(1));
// 予想される結果: 32767
```

## 構文

```js-nolint
setInt16(byteOffset, value)
setInt16(byteOffset, value, littleEndian)
```

### 引数

- `byteOffset`
  - : データを格納するビューの先頭からのバイト単位のオフセットです。
- `value`
  - : 設定する値。値がどのようにバイト列にエンコードされるかについては、[値のエンコード方式と正規化](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#値のエンコード方式と正規化)を参照してください。
- `littleEndian` {{optional_inline}}
  - : データを[リトルエンディアンまたはビッグエンディアン](/ja/docs/Glossary/Endianness)のどちらの形式で格納するかを示します。`false` または `undefined` の場合、ビッグエンディアンの値が書き込まれます。

### 返値

{{jsxref("undefined")}} です。

### 発生するエラー

- {{jsxref("RangeError")}}
  - : `byteOffset` がビューの末尾を越えて格納するように設定されたときに発生します。

## 例

### setInt16() メソッドの使用

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setInt16(0, 3);
dataview.getInt16(1); // 768
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Int16Array")}}
