---
title: GPUCompilationMessage
slug: Web/API/GPUCompilationMessage
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("WebGPU API", "WebGPU API", "", "nocode")}} の **`GPUCompilationMessage`** インターフェイスは、GPU シェーダーモジュールコンパイラーが生成した 1 個の情報・警告・エラーのメッセージを表します。

`GPUCompilationMessage` オブジェクトの配列を、{{domxref("GPUShaderModule.getCompilationInfo()")}} からアクセスできる {{domxref("GPUCompilationInfo")}} オブジェクトの `messages` プロパティで参照できます。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("GPUCompilationMessage.length", "length")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : メッセージが対応する部分文字列の長さを表す数値です。
- {{domxref("GPUCompilationMessage.lineNum", "lineNum")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : メッセージが対応するシェーダーコードの行番号を表す数値です。
- {{domxref("GPUCompilationMessage.linePos", "linePos")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : メッセージが対応するコードの行内の位置を表す数値です。これは点であることも、関係する部分文字列の始点であることもあります。
- {{domxref("GPUCompilationMessage.message", "message")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : 人間向けのメッセージテキストを表す文字列です。
- {{domxref("GPUCompilationMessage.offset", "offset")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : シェーダーコードの始点から、メッセージが対応する点または関連する部分文字列の始点までのオフセットを表す数値です。
- {{domxref("GPUCompilationMessage.type", "type")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : メッセージの種類を表す列挙値です。`"error"`・`"info"`・`"warning"` のいずれかです。

## 例

例はメインの [`GPUCompilationInfo` のページ](/ja/docs/Web/API/GPUCompilationInfo#例)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
