---
title: "GPUError: message プロパティ"
slug: Web/API/GPUError/message
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("GPUError")}} インターフェイスの読み取り専用プロパティ **`message`** は、なぜエラーが発生したかを説明する人間向けのメッセージを提供します。

## 値

文字列です。

## 例

`GPUError` をベースとするエラーオブジェクトの使い方の例は、以下を参照してください。

- [`GPUDevice.popErrorScope`](/ja/docs/Web/API/GPUDevice/popErrorScope#例)
- [`GPUDevice uncapturederror` イベント](/ja/docs/Web/API/GPUDevice/uncapturederror_event#例)
- {{domxref("GPUInternalError")}}・{{domxref("GPUOutOfMemoryError")}}・{{domxref("GPUValidationError")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
