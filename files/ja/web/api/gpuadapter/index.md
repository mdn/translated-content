---
title: GPUAdapter
slug: Web/API/GPUAdapter
l10n:
  sourceCommit: ee9993f6186ca6673b96d226e63132b3e317813f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("WebGPU API", "WebGPU API", "", "nocode")}} の **`GPUAdapter`** インターフェイスは、GPU アダプターを表します。これを用いて {{domxref("GPUDevice")}}、アダプターの情報、機能、制限を要求できます。

`GPUAdapter` オブジェクトは {{domxref("GPU.requestAdapter()")}} メソッドを用いて要求できます。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("GPUAdapter.features", "features")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : アダプターが対応している追加の機能を表現する {{domxref("GPUSupportedFeatures")}} オブジェクトです。
- {{domxref("GPUAdapter.isFallbackAdapter", "isFallbackAdapter")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : 論理値です。アダプターが[フォールバックアダプター](/ja/docs/Web/API/GPU/requestAdapter#フォールバックアダプター)である場合は `true` を返し、そうでない場合は `false` を返します。
- {{domxref("GPUAdapter.limits", "limits")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : アダプターが対応している制限を表現する {{domxref("GPUSupportedLimits")}} オブジェクトです。

## インスタンスメソッド

- {{domxref("GPUAdapter.requestAdapterInfo", "requestAdapterInfo()")}} {{Experimental_Inline}}
  - : アダプターに関する特定用の情報が格納された {{domxref("GPUAdapterInfo")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。
- {{domxref("GPUAdapter.requestDevice", "requestDevice()")}} {{Experimental_Inline}}
  - : GPU とのやりとり用の第一インターフェイスである {{domxref("GPUDevice")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。

## 例

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU に対応していません。");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("WebGPU アダプターを要求できませんでした。");
  }

  const device = await adapter.requestDevice();

  //...
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
