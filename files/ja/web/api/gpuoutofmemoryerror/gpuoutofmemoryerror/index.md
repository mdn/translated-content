---
title: "GPUOutOfMemoryError: GPUOutOfMemoryError() コンストラクター"
slug: Web/API/GPUOutOfMemoryError/GPUOutOfMemoryError
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`GPUOutOfMemoryError()`** コンストラクターは、新しい {{domxref("GPUOutOfMemoryError")}} オブジェクトのインスタンスを生成します。

## 構文

```js-nolint
new GPUOutOfMemoryError(message)
```

### 引数

- `message`
  - : なぜエラーが発生したかを説明する人間向けのメッセージを提供する文字列です。

## 例

開発者は、自分でこのコンストラクターを用いて `GPUOutOfMemoryError` オブジェクトを生成することはないでしょう。ユーザーエージェントは、{{domxref("GPUDevice.popErrorScope")}} または {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} イベントでアウトオブメモリーエラーが浮かび上がってきた際、適切なオブジェクトを生成するためにこのコンストラクターを用います。

`GPUOutOfMemoryError` オブジェクトのインスタンスを扱う具体的な例は、メインの [`GPUOutOfMemoryError`](/ja/docs/Web/API/GPUOutOfMemoryError#例) のページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
