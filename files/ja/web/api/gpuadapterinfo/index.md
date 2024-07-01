---
title: GPUAdapterInfo
slug: Web/API/GPUAdapterInfo
l10n:
  sourceCommit: ee9993f6186ca6673b96d226e63132b3e317813f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("WebGPU API", "WebGPU API", "", "nocode")}} の **`GPUAdapterInfo`** インターフェイスには、{{domxref("GPUAdapter")}} に関する特定用の情報が格納されています。

`GPUAdapterInfo` オブジェクトのインスタンスは、{{domxref("GPUAdapter.requestAdapterInfo()")}} メソッドを用いて要求できます。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("GPUAdapterInfo.architecture", "architecture")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : アダプターが属している GPU のファミリーまたはクラスの名前です。取得できない場合は空文字列を返します。
- {{domxref("GPUAdapterInfo.description", "description")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : アダプターを表現する人間に読める文字列です。取得できない場合は空文字列を返します。
- {{domxref("GPUAdapterInfo.device", "device")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : アダプターのベンダー固有の識別子です。取得できない場合は空文字列を返します。
- {{domxref("GPUAdapterInfo.vendor", "vendor")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : アダプターのベンダーの名前です。取得できない場合は空文字列を返します。

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
  console.log(adapterInfo.architecture);
  console.log(adapterInfo.vendor);

  // ...
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
