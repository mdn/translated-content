---
title: GPUDeviceLostInfo
slug: Web/API/GPUDeviceLostInfo
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("WebGPU API", "WebGPU API", "", "nocode")}} の **`GPUDeviceLostInfo`** インターフェイスは、{{domxref("GPUDevice.lost")}} {{jsxref("Promise")}} が解決した際に返されるオブジェクトを表します。これは、デバイスがなぜロストしたかの情報を提供します。

「ロスト」状態についての詳細は、{{domxref("GPUDevice.lost")}} ページを参照してください。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("GPUDeviceLostInfo.message", "message")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : なぜデバイスがロストしたのかを説明する人間向けのメッセージを提供する文字列です。
- {{domxref("GPUDeviceLostInfo.reason", "reason")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : 機械可読な形式でデバイスがロストした理由を定義する列挙値です。

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

  // GPUDevice を作成する
  let device = await adapter.requestDevice(descriptor);

  // lost を用いてロストしたデバイスを処理する
  device.lost.then((info) => {
    console.error(`WebGPU デバイスがロストしました: ${info.message}`);
    device = null;
    if (info.reason !== "destroyed") {
      init();
    }
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
