---
title: DataView.prototype.getBigInt64()
short-title: getBigInt64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getBigInt64
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`getBigInt64()`** は {{jsxref("DataView")}} インスタンスのメソッドで、この `DataView` の指定されたバイトオフセットから 8 バイトを読み取り、符号付き 64 ビット整数として解釈します。アラインメント制約はありません。境界内の任意のオフセットからマルチバイト値を取得できます。

{{InteractiveExample("JavaScript デモ: DataView.prototype.getBigInt64()")}}

```js interactive-example
// ArrayBuffer をバイト単位のサイズで作成
const buffer = new ArrayBuffer(16);

// 符号付き 64 ビット整数に収まる最大の長整数値
const max = 2n ** (64n - 1n) - 1n;

const view = new DataView(buffer);
view.setBigInt64(1, max);

console.log(view.getBigInt64(1));
// 予想される結果: 9223372036854775807n
```

## 構文

```js-nolint
getBigInt64(byteOffset)
getBigInt64(byteOffset, littleEndian)
```

### 引数

- `byteOffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを読み取る位置です。
- `littleEndian` {{optional_inline}}
  - : データが[リトルエンディアンとビッグエンディアン](/ja/docs/Glossary/Endianness)のどちらの形式で格納されているかを示します。`false` または `undefined` の場合、ビッグエンディアンの値が読み取られます。

### 返値

長整数 ({{jsxref("BigInt")}}) で、-2<sup>63</sup> 以上 2<sup>63</sup>-1 以下です。

### 例外

- {{jsxref("RangeError")}}
  - : `byteOffset` がビューの末尾を越えて読み取るように設定されている場合に発生します。

## 例

### getBigInt64() の使用

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getBigInt64(1)); // 72623859790382856n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt64Array")}}
