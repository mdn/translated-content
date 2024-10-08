---
title: GPUUncapturedErrorEvent
slug: Web/API/GPUUncapturedErrorEvent
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("WebGPU API", "WebGPU API", "", "nocode")}} の **`GPUUncapturedErrorEvent`** インターフェイスは、{{domxref("GPUDevice")}} の {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} イベント用のイベントオブジェクト型で、テレメトリーや予期せぬエラーの報告に使用されます。

エラーが発生する可能性を把握している場合は、{{domxref("GPUDevice.pushErrorScope", "pushErrorScope()")}} および {{domxref("GPUDevice.popErrorScope", "popErrorScope()")}} を用いて処理をするべきです。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("GPUUncapturedErrorEvent.GPUUncapturedErrorEvent", "GPUUncapturedErrorEvent()")}} {{Experimental_Inline}}
  - : 新しい `GPUUncapturedErrorEvent` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

_親の {{domxref("Event")}} からプロパティを継承します。_

- {{domxref("GPUUncapturedErrorEvent.error", "error")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : エラーの詳細へのアクセスを提供する {{domxref("GPUError")}} オブジェクトのインスタンスです。

## 例

エラースコープで処理されなかったエラーをすべて拾ってキャプチャするグローバルな仕組みとして、以下のようなコードを使用できます。

```js
// ...

device.addEventListener("uncapturederror", (event) => {
  // エラーを再浮上させる
  console.error("A WebGPU error was not captured:", event.error.message);
  reportErrorToServer({
    type: event.error.constructor.name,
    message: event.error.message,
  });
});

// ...
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
