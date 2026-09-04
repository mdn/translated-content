---
title: DataView.prototype.getUint16()
short-title: getUint16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint16
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`getUint16()`** は {{jsxref("DataView")}} インスタンスのメソッドで、この `DataView` の指定されたバイトオフセットから 2 バイトを読み取り、符号なし 16 ビット整数として解釈します。アラインメント制約はありません。境界内の任意のオフセットからマルチバイト値を取得できます。

{{InteractiveExample("JavaScript デモ: DataView.prototype.getUint16()")}}

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
getUint16(byteOffset)
getUint16(byteOffset, littleEndian)
```

### 引数

- `byteOffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを読み取る位置です。
- `littleEndian` {{optional_inline}}
  - : データが[リトルエンディアンとビッグエンディアン](/ja/docs/Glossary/Endianness)のどちらの形式で格納されているかを示します。`false` または `undefined` の場合、ビッグエンディアンの値が読み取られます。

### 返値

整数で、0 以上 65535 以下です。

### 例外

- {{jsxref("RangeError")}}
  - : `byteOffset` がビューの末尾を越えて読み取るように設定されている場合に発生します。

## 例

### getUint16() の使用

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getUint16(1)); // 258
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
