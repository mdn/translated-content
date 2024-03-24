---
title: "Navigator: gpu プロパティ"
short-title: gpu
slug: Web/API/Navigator/gpu
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

**`Navigator.gpu`** は読み取り専用のプロパティで、 {{domxref("WebGPU_API", "WebGPU API", "", "nocode")}} のエントリーポイントである現在の閲覧コンテキストの {{domxref("GPU")}} オブジェクトを返します。

## 値

{{domxref("GPU")}} オブジェクトです。

## 例

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
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

- {{domxref("WebGPU_API", "WebGPU API", "", "nocode")}}
