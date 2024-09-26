---
title: "GPUUncapturedErrorEvent: GPUUncapturedErrorEvent() コンストラクター"
slug: Web/API/GPUUncapturedErrorEvent/GPUUncapturedErrorEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`GPUUncapturedErrorEvent()`** コンストラクターは、新しい {{domxref("GPUUncapturedErrorEvent")}} オブジェクトのインスタンスを生成します。

## 構文

```js-nolint
new GPUUncapturedErrorEvent(type, options)
```

### 引数

- `type`
  - : エラーの種類を指定する列挙値です。以下の値のいずれかです。
    - `"internal"`
      - : エラーは {{domxref("GPUInternalError")}} です。
    - `"out-of-memory"`
      - : エラーは {{domxref("GPUOutOfMemoryError")}} です。
    - `"validation"`
      - : エラーは {{domxref("GPUValidationError")}} です。
- `options`
  - : オブジェクトです。以下のプロパティを持つことができます。
    - `error`
      - : エラーの詳細へのアクセスを提供する {{domxref("GPUError")}} オブジェクトのインスタンスです。

## 例

開発者は、自分でこのコンストラクターを用いて `GPUUncapturedErrorEvent` オブジェクトを生成することはないでしょう。ユーザーエージェントは、{{domxref("GPUDevice")}} の {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} イベントが発火したとき、予期せぬエラーをキャプチャできるようにするため、このコンストラクターを用いて適切なオブジェクトを生成します。

例は、メインの [`GPUUncapturedErrorEvent`](/ja/docs/Web/API/GPUUncapturedErrorEvent#例) のページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
