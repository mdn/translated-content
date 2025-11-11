---
title: "GPUCanvasContext: canvas プロパティ"
slug: Web/API/GPUCanvasContext/canvas
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("GPUCanvasContext")}} インターフェイスの読み取り専用プロパティ **`canvas`** は、このコンテキストの作成元であるキャンバスへの参照を返します。

## 値

{{domxref("HTMLCanvasElement")}} または {{domxref("OffscreenCanvas")}} オブジェクトのインスタンスです。

## 例

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

// HTMLCanvasElement への参照を返す
context.canvas;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
