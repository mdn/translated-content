---
title: "GPUAdapterInfo: description プロパティ"
slug: Web/API/GPUAdapterInfo/description
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("GPUAdapterInfo")}} インターフェイスの読み取り専用プロパティ **`description`** は、アダプターを表現する人間に読める文字列を返します。取得できない場合は空文字列を返します。

## 値

文字列です。

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

  const adapterInfo = await adapter.requestAdapterInfo();
  console.log(adapterInfo.description);

  // ...
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
