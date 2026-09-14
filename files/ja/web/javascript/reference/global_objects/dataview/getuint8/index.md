---
title: DataView.prototype.getUint8()
short-title: getUint8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint8
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`getUint8()`** は {{jsxref("DataView")}} インスタンスのメソッドで、この `DataView` の指定されたバイトオフセットから 1 バイトを読み取り、符号なし 8 ビット整数として解釈します。

{{InteractiveExample("JavaScript デモ: DataView.prototype.getUint8()")}}

```js interactive-example
// ArrayBuffer をバイト単位のサイズで作成
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint8(1, 255); // 最大の符号なし 8 ビット整数

console.log(view.getUint8(1));
// 予想される結果: 255
```

## 構文

```js-nolint
getUint8(byteOffset)
```

### 引数

- `byteOffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを読み取る位置です。

### 返値

整数で、0 以上 255 以下です。

### 発生するエラー

- {{jsxref("RangeError")}}
  - : `byteOffset` がビューの末尾を越えて読み取るように設定されている場合に発生します。

## 例

### getUint8() の使用

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getUint8(1)); // 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Uint8Array")}}
