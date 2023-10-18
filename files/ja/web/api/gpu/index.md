---
title: GPU
slug: Web/API/GPU
l10n:
  sourceCommit: ced28062a310010c347dae055bd53760b10293ba
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("WebGPU API", "WebGPU API", "", "nocode")}} の **`GPU`** インターフェイスは、WebGPU を使用するためのスタート地点です。デバイスの要求、機能や制限の設定、などを行える {{domxref("GPUAdapter")}} を取得するのに使用できます。

現在のコンテキスト用の `GPU` オブジェクトには、{{domxref("Navigator.gpu")}} または {{domxref("WorkerNavigator.gpu")}} プロパティからアクセスできます。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("GPU.wgslLanguageFeatures", "wgslLanguageFeatures")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : この WebGPU の実装が対応している [WGSL 言語の拡張](https://gpuweb.github.io/gpuweb/wgsl/#language-extension)を報告する {{domxref("WGSLLanguageFeatures")}} オブジェクトです。

## インスタンスメソッド

- {{domxref("GPU.requestAdapter", "requestAdapter()")}} {{Experimental_Inline}}
  - : {{domxref("GPUAdapter")}} オブジェクトのインスタンスで解決する {{jsxref("Promise")}} を返します。これを用いて、WebGPU の機能を用いるための第一のインターフェイスである {{domxref("GPUDevice")}} を要求できます。
- {{domxref("GPU.getPreferredCanvasFormat", "getPreferredCanvasFormat()")}} {{Experimental_Inline}}
  - : 現在のシステムにおける、8 ビット深度で通常のダイナミックレンジのコンテンツを表示するために最適なキャンバステクスチャーの形式を返します。

## 例

### アダプターとデバイスを要求する

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

### GPUCanvasContext を最適なテクスチャー形式で設定する

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
