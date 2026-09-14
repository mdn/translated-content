---
title: DataView.prototype.setFloat16()
short-title: setFloat16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setFloat16
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`setFloat16()`** は {{jsxref("DataView")}} インスタンスのメソッドで、数値を受け取り、16 ビット浮動小数点数として、この `DataView` の指定されたバイトオフセットから始まる 2 バイトに格納します。アラインメント制約はなく、マルチバイトの値は範囲内の任意のオフセットに格納できます。

{{InteractiveExample("JavaScript デモ: DataView.prototype.setFloat16()")}}

```js interactive-example
// ArrayBuffer をバイト単位のサイズで作成
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setFloat16(1, Math.PI);

console.log(view.getFloat16(1));
// 予想される結果: 3.140625
```

## 構文

```js-nolint
setFloat16(byteOffset, value)
setFloat16(byteOffset, value, littleEndian)
```

### Parameters

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

### setFloat16() メソッドの使用

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setFloat16(0, 3);
dataview.getFloat16(1); // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`DataView.prototype.setFloat16` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#float16-methods)
- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Float16Array")}}
