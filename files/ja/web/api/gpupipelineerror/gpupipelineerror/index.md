---
title: "GPUPipelineError: GPUPipelineError() コンストラクター"
slug: Web/API/GPUPipelineError/GPUPipelineError
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`GPUPipelineError()`** コンストラクターは、新しい {{domxref("GPUPipelineError")}} オブジェクトのインスタンスを生成します。

## 構文

```js-nolint
new GPUPipelineError(message, options)
```

### 引数

- `message` {{optional_inline}}
  - : なぜエラーが起きたのかを説明する人間向けのメッセージを提供する文字列です。指定されなかった場合は、`message` は空文字列 (`""`) になります。
- `options`
  - : オブジェクトで、以下のプロパティを持つことができます。
    - `reason`
      - : パイプラインの生成に失敗した理由を機械可読な形式で表す列挙値です。値は以下のいずれかです。
        - `"internal"`: パイプラインの生成は内部エラーのため失敗しました。(この種類のエラーについて詳しくは、{{domxref("GPUInternalError")}} を参照してください)
        - `"validation"`: パイプラインの生成はバリデーションエラーのため失敗しました。(この種類のエラーについて詳しくは、{{domxref("GPUValidationError")}} を参照してください)

## 例

開発者は、自分でこのコンストラクターを用いて `GPUPipelineError` オブジェクトを生成することはないでしょう。ユーザーエージェントは、パイプラインの失敗を表すため {{domxref("GPUDevice.createComputePipelineAsync()")}} や {{domxref("GPUDevice.createRenderPipelineAsync()")}} が返した {{jsxref("Promise")}} が拒否されるとき、このコンストラクターを用いて適切なオブジェクトを生成します。

`GPUPipelineError` オブジェクトのインスタンスを扱う例は、メインの [`GPUPipelineError`](/ja/docs/Web/API/GPUPipelineError#例) のページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
