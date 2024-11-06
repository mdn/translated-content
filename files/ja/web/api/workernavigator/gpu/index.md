---
title: "WorkerNavigator: gpu プロパティ"
slug: Web/API/WorkerNavigator/gpu
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef("Web Workers API")}}{{SeeCompatTable}}

{{domxref("WorkerNavigator")}} インターフェイスの読み取り専用プロパティ **`gpu`** は、現在のワーカーコンテキスト用の {{domxref("GPU")}} オブジェクトを返します。これは {{domxref("WebGPU_API", "WebGPU API", "", "nocode")}} のエントリーポイントです。

## 値

{{domxref("GPU")}} オブジェクトです。

## 例

```js
// ウェブワーカーの内部で実行できます
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

- {{domxref("WebGPU_API", "WebGPU API", "", "nocode")}}
