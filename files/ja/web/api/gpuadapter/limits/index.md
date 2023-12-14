---
title: "GPUAdapter: limits プロパティ"
slug: Web/API/GPUAdapter/limits
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("GPUAdapter")}} インターフェイスの読み取り専用プロパティ **`limits`** は、アダプターが対応している制限を表現する {{domxref("GPUSupportedLimits")}} オブジェクトを返します。

ドライブバイフィンガープリンティングで利用できる一意な情報を減らすため、ブラウザーは各 GPU の正確な制限を報告するのではなく、それぞれの制限で異なる段階ごとの値を報告する可能性が高いです。たとえば、ある制限の段階は 2048、8192、32768 である可能性があります。GPU の実際の制限が 16384 である場合は、このブラウザーは 8192 として報告します。

異なるブラウザーは異なる扱いをする可能性があり、段階の値は時間の経過で変わる可能性があるため、正確な制限の値を予想するのは難しいです。徹底的にテストすることが推奨されます。

## 値

{{domxref("GPUSupportedLimits")}} オブジェクトのインスタンスです。

## 例

以下のコードでは、`GPUAdapter.limits` の `maxBindGroups` の値を問い合わせ、6 以上であるかをチェックします。理論上のサンプルアプリケーションは理想的には 6 個のバインドグループを必要とするので、返された値が 6 以上の場合は `requiredLimits` オブジェクトに最大値 6 を追加適用し、{{domxref("GPUAdapter.requestDevice()")}} を用いてこの制限の要件を満たすデバイスを要求します。

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU に対応していません。");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("WebGPU アダプターを要求できませんでした。");
  }

  const requiredLimits = {};

  // アプリケーションは理想的には 6 個のバインドグループを必要とするので、
  // アプリケーションが必要とする分の要求を試みる
  if (adapter.limits.maxBindGroups >= 6) {
    requiredLimits.maxBindGroups = 6;
  }

  const device = await adapter.requestDevice({
    requiredLimits,
  });

  // ...
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
