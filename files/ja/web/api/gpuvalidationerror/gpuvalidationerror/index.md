---
title: "GPUValidationError: GPUValidationError() コンストラクター"
slug: Web/API/GPUValidationError/GPUValidationError
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`GPUValidationError()`** コンストラクターは、新しい {{domxref("GPUValidationError")}} オブジェクトのインスタンスを生成します。

## 構文

```js-nolint
new GPUValidationError(message)
```

### 引数

- `message`
  - : なぜエラーが起きたのかを説明する人間向けのメッセージを提供する文字列です。

## 例

開発者は、自分でこのコンストラクターを用いて `GPUValidationError` オブジェクトを生成することはないでしょう。ユーザーエージェントは、{{domxref("GPUDevice.popErrorScope")}} または {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} イベントでバリデーションエラーが浮かび上がったとき、このコンストラクターを用いて適切なオブジェクトを生成します。

`GPUValidationError` オブジェクトのインスタンスを扱う具体的な例は、メインの [`GPUValidationError`](/ja/docs/Web/API/GPUValidationError#例) のページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
