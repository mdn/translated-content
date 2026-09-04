---
title: DataView.prototype.setUint16()
short-title: setUint16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setUint16
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`setUint16()`** は {{jsxref("DataView")}} インスタンスのメソッドで、数値を受け取り、符号なし 16 ビット整数として、この `DataView` の指定されたバイトオフセットから始まる 2 バイトに格納します。アラインメント制約はなく、マルチバイトの値は範囲内の任意のオフセットに格納できます。

{{InteractiveExample("JavaScript デモ: DataView.prototype.setUint16()")}}

```js interactive-example
// ArrayBuffer をバイト単位のサイズで作成
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint16(1, 65535); // 符号なし 16 ビット整数の最大値

console.log(view.getUint16(1));
// 予想される結果: 65535
```

## 構文

```js-nolint
setUint16(byteOffset, value)
setUint16(byteOffset, value, littleEndian)
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

### setUint16() メソッドの使用

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setUint16(0, 3);
dataview.getUint16(1); // 768
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Uint16Array")}}
