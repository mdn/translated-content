---
title: DataView.prototype.getInt32()
short-title: getInt32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt32
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`getInt32()`** は {{jsxref("DataView")}} インスタンスのメソッドで、この `DataView` の指定されたバイトオフセットから 4 バイトを読み取り、符号付き 32 ビット整数として解釈します。アラインメント制約はありません。境界内の任意のオフセットからマルチバイト値を取得できます。

{{InteractiveExample("JavaScript デモ: DataView.prototype.getInt32()")}}

```js interactive-example
// ArrayBuffer をバイト単位のサイズで作成
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt32(1, 2147483647); // 符号付き 32 ビット整数の最大値

console.log(view.getInt32(1));
// 予想される結果: 2147483647
```

## 構文

```
getInt32(byteOffset)
getInt32(byteOffset, littleEndian)
```

### 引数

- `byteOffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを読み取る位置です。
- `littleEndian` {{optional_inline}}
  - : データが[リトルエンディアンとビッグエンディアン](/ja/docs/Glossary/Endianness)のどちらの形式で格納されているかを示します。`false` または `undefined` の場合、ビッグエンディアンの値が読み取られます。

### 返値

整数で、-2147483648 以上 2147483647 以下です。

### 例外

- {{jsxref("RangeError")}}
  - : `byteOffset` がビューの末尾を越えて読み取るように設定されている場合に発生します。

## 例

### getInt32() の使用

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getInt32(1); // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Int32Array")}}
