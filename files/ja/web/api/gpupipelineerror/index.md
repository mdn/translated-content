---
title: GPUPipelineError
slug: Web/API/GPUPipelineError
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("WebGPU API", "WebGPU API", "", "nocode")}} の **`GPUPipelineError`** インターフェイスは、パイプラインの失敗を表現します。これは、{{domxref("GPUDevice.createComputePipelineAsync()")}} や {{domxref("GPUDevice.createRenderPipelineAsync()")}} から返された {{jsxref("Promise")}} が拒否されたとき渡される値です。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("GPUPipelineError.GPUPipelineError", "GPUPipelineError()")}} {{Experimental_Inline}}
  - : 新しい `GPUPipelineError` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

_親の {{domxref("DOMException")}} からプロパティを継承します。_

- {{domxref("GPUPipelineError.reason", "reason")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : パイプラインの生成に失敗した理由を機械可読な形式で表す列挙値です。

## 例

以下のスニペットでは、{{domxref("GPUDevice.createComputePipelineAsync()")}} を用いて {{domxref("GPUComputePipeline")}} を生成しようとしています。しかし、コンピュートパイプラインの `entryPoint` を (`"main"` とするべきなのに) `"maijn"` とスペルミスしているので、パイプラインの生成に失敗し、`catch` ブロックで処理結果の理由とエラーメッセージをコンソールに出力します。

```js
// ...

let computePipeline;

try {
  computePipeline = await device.createComputePipelineAsync({
    layout: device.createPipelineLayout({
      bindGroupLayouts: [bindGroupLayout],
    }),
    compute: {
      module: shaderModule,
      entryPoint: "maijn",
    },
  });
} catch (error) {
  // error は GPUPipelineError オブジェクトのインスタンス
  console.error(error.reason);
  console.error(`パイプラインの生成に失敗: ${error.message}`);
}

// ...
```

この場合、得られる `reason` は `"Validation"` で、`message` は `"Entry point "maijn" doesn't exist in the shader module [ShaderModule]."` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
