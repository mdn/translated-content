---
title: DataView.prototype.setBigUint64()
short-title: setBigUint64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setBigUint64
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`setBigUint64()`** は {{jsxref("DataView")}} インスタンスのメソッドで、長整数を受け取り、符号なし 64 ビット整数として、この `DataView` の指定されたバイトオフセットから始まる 8 バイトに格納します。アラインメント制約はなく、マルチバイトの値は範囲内の任意のオフセットに格納できます。

{{InteractiveExample("JavaScript デモ: DataView.prototype.setBigUint64()")}}

```js interactive-example
// ArrayBuffer をバイト単位のサイズで作成
const buffer = new ArrayBuffer(16);

// 符号なし 64 ビット整数に収まる最大の長整数値
const max = 2n ** 64n - 1n;

const view = new DataView(buffer);
view.setBigUint64(1, max);

console.log(view.getBigUint64(1));
// 予想される結果: 18446744073709551615n
```

## 構文

```js-nolint
setBigUint64(byteOffset, value)
setBigUint64(byteOffset, value, littleEndian)
```

### 引数

- `byteOffset`
  - : データを格納するビューの先頭からのバイト単位のオフセットです。
- `value`
  - : 長整数 ({{jsxref("BigInt")}}) として設定する値。値がどのようにバイト列にエンコードされるかについては、[値のエンコード方式と正規化](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#値のエンコード方式と正規化)を参照してください。
- `littleEndian` {{optional_inline}}
  - : データを[リトルエンディアンまたはビッグエンディアン](/ja/docs/Glossary/Endianness)のどちらの形式で格納するかを示します。`false` または `undefined` の場合、ビッグエンディアンの値が書き込まれます。

### 返値

{{jsxref("undefined")}} です。

### 発生するエラー

- {{jsxref("RangeError")}}
  - : `byteOffset` がビューの末尾を越えて格納するように設定されたときに発生します。

## 例

### setBigUint64() メソッドの使用

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setBigUint64(0, 3n);
dataview.getBigUint64(1); // 768n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigUint64Array")}}
