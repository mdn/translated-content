---
title: DataView.prototype.buffer
short-title: buffer
slug: Web/JavaScript/Reference/Global_Objects/DataView/buffer
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`buffer`** は {{jsxref("DataView")}} インスタンスのアクセサープロパティで、このビューの構築時に参照された {{jsxref("ArrayBuffer")}} または {{jsxref("SharedArrayBuffer")}} を表します。

{{InteractiveExample("JavaScript デモ: DataView.buffer")}}

```js interactive-example
// ArrayBuffer を作成
const buffer = new ArrayBuffer(123);

// ビューを作成
const view = new DataView(buffer);

console.log(view.buffer.byteLength);
// 予想される結果: 123
```

## 解説

`buffer` プロパティは、設定アクセサー関数が `undefined` である、すなわち読み取りのみができるアクセサープロパティです。この値は `DataView` が構築されたときに確立され、変更することができません。

## 例

### buffer プロパティの使用

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.buffer; // ArrayBuffer { byteLength: 8 }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
