---
title: DataView.prototype.byteOffset
short-title: byteOffset
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteOffset
l10n:
  sourceCommit: 377c7d317e7ffd477bc8b1273f0e215978b76dd1
---

**`byteOffset`** は {{jsxref("DataView")}} インスタンスのアクセサープロパティで、このビューの {{jsxref("ArrayBuffer")}} または {{jsxref("SharedArrayBuffer")}} の先頭からオフセットを表します。

{{InteractiveExample("JavaScript デモ: DataView.byteOffset")}}

```js interactive-example
// ArrayBuffer をバイト単位のサイズで作成
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer, 12, 4); // 12 バイト目から続く 4 バイト

console.log(view.byteOffset);
// 予想される結果: 12
```

## 解説

`byteOffset`プロパティはアクセサープロパティであり、その設定アクセサー関数 は `undefined` であるため、このプロパティは読み取り専用です。値は `DataView` が構築された時点で設定され、変更することはできません。ただし、基盤となるバッファーのサイズが変更され、ビュー範囲が有効でなくなった場合、`byteOffset` は 0 になります。

## 例

### byteOffset プロパティの使用

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteOffset; // 0 （オフセットの指定なし）

const dataview2 = new DataView(buffer, 3);
dataview2.byteOffset; // 3 （DataView を構築した際に指定された通り）

const buffer2 = new ArrayBuffer(16, { maxByteLength: 32 });
const dataviewLengthTracking = new DataView(buffer2, 4);
dataviewLengthTracking.byteOffset; // 4
buffer2.resize(3);
dataviewLengthTracking.byteOffset; // 0 （ビュー範囲が有効ではなくなった）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
