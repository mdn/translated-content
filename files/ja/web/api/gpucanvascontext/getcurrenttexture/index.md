---
title: "GPUCanvasContext: getCurrentTexture() メソッド"
slug: Web/API/GPUCanvasContext/getCurrentTexture
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("GPUCanvasContext")}} インターフェイスの **`getCurrentTexture()`** メソッドは、このキャンバスコンテキストによって文書に次に合成される {{domxref("GPUTexture")}} を返します。

## 構文

```js-nolint
getCurrentTexture()
```

### 引数

なし

### 返値

{{domxref("GPUTexture")}} オブジェクトのインスタンスです。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 設定をする前 (すなわち、{{domxref("GPUCanvasContext.configure()")}} を呼び出す前) のキャンバスコンテキストで `getCurrentTexture()` が呼ばれたとき投げられます。

## 例

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});

//...
// 後で
const commandEncoder = device.createCommandEncoder();

const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: [0, 0, 0, 1], // 不透明な黒
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
