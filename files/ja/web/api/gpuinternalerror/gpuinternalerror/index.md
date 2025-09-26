---
title: "GPUInternalError: GPUInternalError() コンストラクター"
slug: Web/API/GPUInternalError/GPUInternalError
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`GPUInternalError()`** コンストラクターは、新しい {{domxref("GPUInternalError")}} オブジェクトのインスタンスを生成します。

## 構文

```js-nolint
new GPUInternalError(message)
```

### 引数

- `message`
  - : なぜエラーが発生したかを説明する人間向けのメッセージを提供する文字列です。

## 例

開発者は、自分でこのコンストラクターを用いて `GPUInternalError` オブジェクトを生成することはないでしょう。ユーザーエージェントは、内部エラーが {{domxref("GPUDevice.popErrorScope")}} または {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} イベントで浮かび上がってきた際、適切なオブジェクトを生成するためにこのコンストラクターを用います。

`GPUInternalError` オブジェクトのインスタンスを扱う例は、メインの [`GPUInternalError`](/ja/docs/Web/API/GPUInternalError#例) のページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
