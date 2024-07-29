---
title: "GPUAdapter: features プロパティ"
slug: Web/API/GPUAdapter/features
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("GPUAdapter")}} インターフェイスの読み取り専用プロパティ **`features`** は、アダプターが対応している追加の機能を表現する {{domxref("GPUSupportedFeatures")}} オブジェクトを返します。

仮想のハードウェアで対応している機能であっても、対応するすべてのブラウザーの WebGPU ですべての機能が使用できるわけではないことに注意するべきです。これは、たとえば以下の場合など、仮想のシステム、ブラウザー、アダプターの制約によるものである可能性があります。

- 仮想のシステムがあるブラウザーと互換性がある方法で機能を利用可能にする保証ができないかもしれません。
- ブラウザーのベンダーが機能への対応を実装するセキュアな方法をまだ見つけられていないか、単に実装まで手が回っていないかもしれません。

WebGPU アプリケーションで特定の追加機能の恩恵を受けたい場合は、徹底的にテストすることが推奨されます。

## 値

{{domxref("GPUSupportedFeatures")}} オブジェクトのインスタンスです。これは [Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set)オブジェクトです。

## 例

以下のコードでは、{{domxref("GPUAdapter")}} で `texture-compression-astc` 機能が利用可能かをチェックします。利用可能であれば、それを配列 `requiredFeatures` にプッシュし、{{domxref("GPUAdapter.requestDevice()")}} でこの機能を要件としてデバイスを要求します。

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU に対応していません。");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("WebGPU アダプターを要求できませんでした。");
  }

  const requiredFeatures = [];

  if (adapter.features.has("texture-compression-astc")) {
    requiredFeatures.push("texture-compression-astc");
  }

  const device = await adapter.requestDevice({
    requiredFeatures,
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
