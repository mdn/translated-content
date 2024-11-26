---
title: "GPUCanvasContext: unconfigure() メソッド"
slug: Web/API/GPUCanvasContext/unconfigure
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("GPUCanvasContext")}} インターフェイスの **`unconfigure()`** メソッドは、これまでのコンテキスト設定をすべて消去し、キャンバスコンテキストが設定されていた間に {{domxref("GPUCanvasContext.getCurrentTexture", "getCurrentTexture()")}} から返されたテクスチャをすべて破棄します。

## 構文

```js-nolint
unconfigure()
```

### 引数

なし

### 返値

なし (`undefined`)

## 例

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});

// 後で
context.unconfigure();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
