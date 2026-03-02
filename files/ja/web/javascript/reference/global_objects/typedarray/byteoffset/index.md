---
title: TypedArray.prototype.byteOffset
short-title: byteOffset
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset
l10n:
  sourceCommit: 377c7d317e7ffd477bc8b1273f0e215978b76dd1
---

**`byteOffset`** は {{jsxref("TypedArray")}} インスタンスのアクセサープロパティで、この型付き配列の {{jsxref("ArrayBuffer")}} または {{jsxref("SharedArrayBuffer")}} の開始位置からの（バイト単位の）オフセットを返します。

## 解説

`byteOffset` プロパティは設定アクセサープロパティが `undefined` であるアクセサープロパティです。これは、このプロパティが読み取り専用であることを意味します。値は型付き配列が構築された時点で確定し、変更できません。ただし、基盤となるバッファーのサイズ変更により表示範囲が有効できなくなった場合、`byteOffset` は 0 になります。

## 例

### byteOffset プロパティの使用

```js
const buffer = new ArrayBuffer(8);

const uint8array1 = new Uint8Array(buffer);
uint8array1.byteOffset; // 0 （オフセットを指定していない）

const uint8array2 = new Uint8Array(buffer, 3);
uint8array2.byteOffset; // 3 （Uint8Array の構築時に指定したとおり）

const buffer2 = new ArrayBuffer(16, { maxByteLength: 32 });
const uint8lengthTracking = new Uint8Array(buffer2, 4);
uint8lengthTracking.byteOffset; // 4
buffer2.resize(3);
uint8lengthTracking.byteOffset; // 0 （ビュー範囲が有効ではなくなった）
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
