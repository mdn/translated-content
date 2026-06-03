---
title: ArrayBuffer.prototype.maxByteLength
short-title: maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/maxByteLength
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`maxByteLength`** は {{jsxref("ArrayBuffer")}} インスタンスのアクセサープロパティで、この配列バッファーがサイズ変更可能な最大長をバイト数で表します。

{{InteractiveExample("JavaScript デモ: ArrayBuffer.prototype.maxByteLength")}}

```js interactive-example
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

console.log(buffer.byteLength);
// 予想される結果: 8

console.log(buffer.maxByteLength);
// 予想される結果: 16
```

## 解説

`maxByteLength` プロパティはアクセサープロパティであり、その設定アクセサー関数が `undefined` であるため、このプロパティは読み取ることしかできません。この値は配列の構築時に、 `maxByteLength` オプションを {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}} コンストラクターで設定した際に設定され、変更することができません。

このプロパティは、この `ArrayBuffer` が切り離されている場合は 0 を返し ます。この `ArrayBuffer` が `maxByteLength` の値を指定せずに構築された場合、このプロパティは `ArrayBuffer` の {{jsxref("ArrayBuffer/byteLength", "byteLength")}} の値と等しい値を返します。

## 例

### maxByteLength の使用

この例では、最大 16 バイトまでサイズ変更可能な 8 バイトのバッファーが作成され、その`maxByteLength`を返しています。

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

buffer.maxByteLength; // 16
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.byteLength")}}
- {{jsxref("ArrayBuffer.prototype.resize()")}}
