---
title: TypedArray.prototype.length
short-title: length
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/length
l10n:
  sourceCommit: 377c7d317e7ffd477bc8b1273f0e215978b76dd1
---

**`length`** は {{jsxref("TypedArray")}} インスタンスのアクセサープロパティで、型付き配列の長さを（要素数で）返します。

{{InteractiveExample("JavaScript デモ: TypedArray.prototype.length", "shorter")}}

```js interactive-example
// ArrayBuffer をバイト単位のサイズで作成
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer, 2);

console.log(uint8.length);
// 予想される結果: 6
```

## 解説

`length` プロパティは set アクセサープロパティが `undefined` であるアクセサープロパティです。これは、このプロパティが読み取り専用であることを意味します。型付き配列が[長さ追跡](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#サイズ変更可能なバッファー表示時の動作について)の場合、その長さは基盤となるバッファーの長さに依存し、バッファのサイズ変更時に変化することがあります。そうでない場合、値は型付き配列が構築された時点で確定し、変更できません。長さ追跡の有無にかかわらず、基盤となるバッファーのサイズ変更により表示範囲が有効できなくなった場合、`length` は 0 になります。

## 例

### length プロパティの使用

```js
const buffer = new ArrayBuffer(8);

const uint8 = new Uint8Array(buffer);
uint8.length; // 8 （バッファーの長さと一致）

const uint8newLength = new Uint8Array(buffer, 1, 5);
uint8newLength.length; // 5 （Uint8Array の構築の際に指定された通り）

const uint8offset = new Uint8Array(buffer, 2);
uint8.length; // 6 （構築された Uint8Array のオフセットによる）

const buffer2 = new ArrayBuffer(16, { maxByteLength: 32 });
const uint8lengthTracking = new Uint8Array(buffer2, 4);
uint8lengthTracking.length; // 12 (16 - 4)
buffer2.resize(20);
uint8lengthTracking.length; // 16 (20 - 4)
buffer2.resize(3);
uint8lengthTracking.length; // 0 （ビュー範囲が有効ではなくなった）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
