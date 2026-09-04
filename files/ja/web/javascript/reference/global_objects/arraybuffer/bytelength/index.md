---
title: ArrayBuffer.prototype.byteLength
short-title: byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`byteLength`** は、{{jsxref("ArrayBuffer")}} のアクセサープロパティで、この配列バッファーの長さをバイト単位で表します。

{{InteractiveExample("JavaScript デモ: ArrayBuffer.prototype.byteLength")}}

```js interactive-example
// ArrayBuffer をバイト単位のサイズで作成
const buffer = new ArrayBuffer(8);

// byteLength でサイズを確認
const bytes = buffer.byteLength;

console.log(bytes);
// 予想される結果: 8
```

## 解説

`byteLength` プロパティはアクセサープロパティで、設定アクセサー関数が `undefined` であるため、このプロパティは読み取ることしかできません。値は配列が構築されるときに設定され、変更することができません。この `ArrayBuffer` が取り外された場合、このプロパティは 0 を返します。

## 例

### byteLength の使用

```js
const buffer = new ArrayBuffer(8);
buffer.byteLength; // 8
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("ArrayBuffer")}}
