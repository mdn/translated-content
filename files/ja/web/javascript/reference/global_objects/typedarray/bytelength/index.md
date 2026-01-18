---
title: TypedArray.prototype.byteLength
short-title: byteLength
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength
l10n:
  sourceCommit: 377c7d317e7ffd477bc8b1273f0e215978b76dd1
---

**`byteLength`** は {{jsxref("TypedArray")}} のアクセサープロパティで、この型付き配列の長さを（バイト単位で）返します。

{{InteractiveExample("JavaScript デモ: TypedArray.byteLength", "shorter")}}

```js interactive-example
// ArrayBuffer をバイト単位のサイズで作成
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer, 2);

console.log(uint8.byteLength);
// 予想される結果: 6
```

## 解説

`byteLength` プロパティはアクセサープロパティであり、その設定アクセサー関数は `undefined` です。つまり、このプロパティは読み取り専用です。型付き配列が[長さ追跡](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#サイズ変更可能なバッファー表示時の動作について)である場合、その長さは基盤となるバッファーの長さに依存し、バッファのサイズ変更時に変更されることがあります。そうでない場合、値は型付き配列の構築時に確定され、変更できません。長さ追跡の有無にかかわらず、基盤となるバッファーのサイズ変更により表示範囲ができなくなった場合、`byteLength` は 0 になります。

## 例

### byteLength プロパティの使用

```js
const buffer = new ArrayBuffer(8);

const uint8 = new Uint8Array(buffer);
uint8.byteLength; // 8 （バッファーのバイト長と一致する）

const uint8newLength = new Uint8Array(buffer, 1, 5);
uint8newLength.byteLength; // 5 （Uint8Array の構築時に指定したとおり）

const uint8offset = new Uint8Array(buffer, 2);
uint8offset.byteLength; // 6 （構築された Uint8Array のオフセットによる）

const buffer2 = new ArrayBuffer(16, { maxByteLength: 32 });
const uint8lengthTracking = new Uint8Array(buffer2, 4);
uint8lengthTracking.byteLength; // 12 (16 - 4)
buffer2.resize(20);
uint8lengthTracking.byteLength; // 16 (20 - 4)
buffer2.resize(3);
uint8lengthTracking.byteLength; // 0 （ビュー範囲が有効ではなくなった）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
