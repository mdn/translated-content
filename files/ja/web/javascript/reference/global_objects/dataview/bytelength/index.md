---
title: DataView.prototype.byteLength
short-title: byteLength
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
l10n:
  sourceCommit: 377c7d317e7ffd477bc8b1273f0e215978b76dd1
---

**`byteLength`** は {{jsxref("DataView")}} インスタンスのアクセサープロパティで、このビューの長さを（バイト単位で）返します。

{{InteractiveExample("JavaScript デモ: DataView.byteLength")}}

```js interactive-example
// ArrayBuffer をバイト単位のサイズで作成
const buffer = new ArrayBuffer(16);

const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 12, 4); // 12 バイト目から続く 4 バイト

console.log(view1.byteLength + view2.byteLength); // 16 + 4
// 予想される結果: 20
```

## 解説

`byteLength`プロパティはアクセサープロパティであり、その設定アクセサー関数は `undefined` であるため、このプロパティは読み取り専用です。`DataView` が [長さ追跡](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#behavior_when_viewing_a_resizable_buffer) である場合、その長さは基盤となるバッファーの長さに依存し、バッファのサイズ変更時に変更されることがあります。そうでない場合、値は `DataView` の構築時に確定され、変更できません。長さ追跡の有無にかかわらず、基盤となるバッファーのサイズ変更により表示範囲ができなくなった場合、`byteLength` は 0 になります。

## 例

### byteLength プロパティの使用

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteLength; // 8 （バッファーの byteLength に一致）

const dataview2 = new DataView(buffer, 1, 5);
dataview2.byteLength; // 5 （DataView を構築する際に指定）

const dataview3 = new DataView(buffer, 2);
dataview3.byteLength; // 6 （構築された DataView のオフセットによる）

const buffer2 = new ArrayBuffer(16, { maxByteLength: 32 });
const dataviewLengthTracking = new DataView(buffer2, 4);
dataviewLengthTracking.byteLength; // 12 (16 - 4)
buffer2.resize(20);
dataviewLengthTracking.byteLength; // 16 (20 - 4)
buffer2.resize(3);
dataviewLengthTracking.byteLength; // 0 （ビュー範囲が有効ではなくなった）
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
