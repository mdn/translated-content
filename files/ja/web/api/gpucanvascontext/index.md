---
title: GPUCanvasContext
slug: Web/API/GPUCanvasContext
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("WebGPU API", "WebGPU API", "", "nocode")}} の **`GPUCanvasContext`** インターフェイスは、`contextType` を `"webgpu"` にして呼び出した {{domxref("HTMLCanvasElement.getContext()")}} から返される、{{htmlelement("canvas")}} 要素の WebGPU レンダリングコンテキストを表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("GPUCanvasContext.canvas", "canvas")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : このコンテキストの作成元であるキャンバスへの参照を返します。

## インスタンスメソッド

- {{domxref("GPUCanvasContext.configure", "configure()")}} {{Experimental_Inline}}
  - : 指定の {{domxref("GPUDevice")}} でレンダリングを行う用にコンテキストを設定し、キャンバスを透明な黒に初期化します。
- {{domxref("GPUCanvasContext.getCurrentTexture", "getCurrentTexture()")}} {{Experimental_Inline}}
  - : このキャンバスコンテキストによって文書に次に合成される {{domxref("GPUTexture")}} を返します。
- {{domxref("GPUCanvasContext.unconfigure", "unconfigure()")}} {{Experimental_Inline}}
  - : これまでのコンテキスト設定をすべて消去し、キャンバスコンテキストが設定されていた間に作成されたテクスチャをすべて破棄します。

## 例

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
