---
title: "GPUAdapter: isFallbackAdapter プロパティ"
slug: Web/API/GPUAdapter/isFallbackAdapter
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("GPUAdapter")}} インターフェイスの読み取り専用プロパティ **`isFallbackAdapter`** は、アダプターが[フォールバックアダプター](/ja/docs/Web/API/GPU/requestAdapter#フォールバックアダプター)である場合は `true` を返し、そうでない場合は `false` を返します。

## 値

論理値です。

## 例

```js
async function init() {
  if (!navigator.gpu) {
    throw Error('WebGPU に対応していません。');
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error('WebGPU アダプターを要求できませんでした。');
  }

  const fallback = adapter.isFallbackAdapter;
  console.log(fallback);

  // ...

```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
