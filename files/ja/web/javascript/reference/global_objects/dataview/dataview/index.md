---
title: DataView() コンストラクター
short-title: DataView()
slug: Web/JavaScript/Reference/Global_Objects/DataView/DataView
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`DataView()`** コンストラクターは、 {{jsxref("DataView")}} オブジェクトを生成します。

{{InteractiveExample("JavaScript デモ: DataView() constructor")}}

```js interactive-example
// ArrayBuffer をバイト単位のサイズで作成
const buffer = new ArrayBuffer(16);

// いくつかのビューを作成
const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 12, 4); // 12 バイト目から隣接する 4 バイト
view1.setInt8(12, 42); // 42 をスロット 12 に置く

console.log(view2.getInt8(0));
// 予想される結果: 42
```

## 構文

```js-nolint
new DataView(buffer)
new DataView(buffer, byteOffset)
new DataView(buffer, byteOffset, byteLength)
```

> [!NOTE]
> `DataView()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) 付きでのみ構築できます。`new` 無しで呼び出そうとすると、{{jsxref("TypeError")}} が発生します。

### 引数

- `buffer`
  - : 既存の {{jsxref("ArrayBuffer")}} または {{jsxref("SharedArrayBuffer")}} で、新しい `DataView` オブジェクトの背景となるストレージとして使用されます。
- `byteOffset` {{optional_inline}}
  - : 新しいビューが参照するバッファーの最初のバイトまでのオフセットをバイト単位で指定します。指定されていない場合、バッファービューは最初のバイトから始まります。
- `byteLength` {{optional_inline}}
  - : バイト配列の要素数です。指定しない場合、ビューの長さはバッファーの長さと一致します。

### 返値

指定されたデータバッファーを表す新しい {{jsxref("DataView")}} オブジェクトです。

### 例外

- {{jsxref("RangeError")}}
  - : `byteOffset` や `byteLength` 引数の値がバッファーの末尾を超えて広がる結果になる場合に発生します。言い換えると、`byteOffset + byteLength > buffer.byteLength` です。

## 例

### DataView の使用

```js
const buffer = new ArrayBuffer(16);
const view = new DataView(buffer, 0);

view.setInt16(1, 42);
view.getInt16(1); // 42
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`DataView` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("DataView")}}
