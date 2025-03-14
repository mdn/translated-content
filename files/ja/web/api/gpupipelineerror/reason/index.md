---
title: "GPUPipelineError: reason プロパティ"
slug: Web/API/GPUPipelineError/reason
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("GPUPipelineError")}} インターフェイスの読み取り専用プロパティ **`reason`** は、パイプラインの生成に失敗した理由を機械可読な形式で表します。

## 値

列挙値で、以下のいずれかの値をとります。

- `"internal"`
  - : パイプラインの生成は内部エラーのため失敗しました。(この種類のエラーについて詳しくは、{{domxref("GPUInternalError")}} を参照してください)
- `"validation"`
  - : パイプラインの生成はバリデーションエラーのため失敗しました。(この種類のエラーについて詳しくは、{{domxref("GPUValidationError")}} を参照してください)

## 例

`GPUPipelineError` オブジェクトのインスタンスを扱う例は、メインの [`GPUPipelineError`](/ja/docs/Web/API/GPUPipelineError#例) のページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
