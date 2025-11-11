---
title: "GPUDeviceLostInfo: reason プロパティ"
slug: Web/API/GPUDeviceLostInfo/reason
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("GPUDeviceLostInfo")}} インターフェイスの読み取り専用プロパティ **`reason`** は、機械可読な形式でデバイスがロストした理由を定義します。

## 値

列挙値です。現時点では、仕様書では {{domxref("GPUDevice.destroy()")}} の呼び出しによりデバイスが破棄されたことを表す値 `"destroyed"` のみが定義されています。

デバイスが使用可能な列挙値では表せない不明な理由でロストした場合は、`reason` は `undefined` を返します。

## 例

例は、メインの [`GPUDevice.lost` ページ](/ja/docs/Web/API/GPUDevice/lost#例)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
