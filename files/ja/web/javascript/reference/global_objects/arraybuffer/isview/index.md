---
title: ArrayBuffer.isView()
short-title: isView()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`ArrayBuffer.isView()`** メソッドは、渡された値が `ArrayBuffer` のビューのうちの一つ、例えば[型付き配列オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)や {{jsxref("DataView")}} であるかどうかを判断します。

{{InteractiveExample("JavaScript デモ: ArrayBuffer.isView()", "shorter")}}

```js interactive-example
// ArrayBuffer をバイト単位のサイズで作成
const buffer = new ArrayBuffer(16);

console.log(ArrayBuffer.isView(new Int32Array()));
// 予想される結果: true
```

## 構文

```js-nolint
ArrayBuffer.isView(value)
```

### 引数

- `value`
  - : チェックする値です。

### 返値

渡された引数が {{jsxref("ArrayBuffer")}} のビューのうちの一つであれば `true` を、そうでなければ `false` を返します。

## 例

### isView の使用

```js
ArrayBuffer.isView(); // false
ArrayBuffer.isView([]); // false
ArrayBuffer.isView({}); // false
ArrayBuffer.isView(null); // false
ArrayBuffer.isView(undefined); // false
ArrayBuffer.isView(new ArrayBuffer(10)); // false

ArrayBuffer.isView(new Uint8Array()); // true
ArrayBuffer.isView(new Float32Array()); // true
ArrayBuffer.isView(new Int8Array(10).subarray(0, 3)); // true

const buffer = new ArrayBuffer(2);
const dv = new DataView(buffer);
ArrayBuffer.isView(dv); // true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
