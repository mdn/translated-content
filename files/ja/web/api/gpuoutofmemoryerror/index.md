---
title: GPUOutOfMemoryError
slug: Web/API/GPUOutOfMemoryError
l10n:
  sourceCommit: 6c592023efa1f762eaa1eb1f36241750626be51c
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("WebGPU API", "WebGPU API", "", "nocode")}} の **`GPUOutOfMemoryError`** インターフェイスは、要求された処理を完了するのに十分な空きメモリが無かったことを表すアウトオブメモリー (OOM) エラーを表現します。

これは、{{domxref("GPUDevice.popErrorScope")}} および {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} イベントで浮かび上がったエラーの型の一つを表します。

アウトオブメモリーエラーは行儀がいいアプリケーションでは比較的まれですが、{{domxref("GPUValidationError")}} より予測が難しいです。これは、このようなエラーはアプリケーションを実行しているデバイスに依存するとともに、同時に GPU リソースを使用しているほかのアプリケーションにも依存するからです。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("GPUOutOfMemoryError.GPUOutOfMemoryError", "GPUOutOfMemoryError()")}} {{Experimental_Inline}}
  - : 新しい `GPUOutOfMemoryError` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

親の {{domxref("GPUError")}} から `message` プロパティを継承しています。

- {{domxref("GPUError.message", "message")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : なぜエラーが起きたのかを説明する人間向けのメッセージを提供する文字列です。

## 例

以下の例では、エラースコープを用いてアウトオブメモリーエラーをキャプチャし、コンソールに記録します。

```js
device.pushErrorScope("out-of-memory");

let buffer = device.createBuffer({
  size: 100_000_000_000, // 100GB; かなり大きすぎる
  usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE,
});

device.popErrorScope().then((error) => {
  if (error) {
    // error は GPUOutOfMemoryError のオブジェクトインスタンス
    buffer = null;
    console.error(`Out of memory, buffer too large. Error: ${error.message}`);
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
- [WebGPU Error Handling best practices](https://toji.dev/webgpu-best-practices/error-handling)
