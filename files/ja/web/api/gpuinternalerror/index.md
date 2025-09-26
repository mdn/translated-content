---
title: GPUInternalError
slug: Web/API/GPUInternalError
l10n:
  sourceCommit: 779045977059a6809ba82548352ce1b00d70dfc7
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("WebGPU API", "WebGPU API", "", "nocode")}} の **`GPUInternalError`** インターフェイスは、バリデーションの要求がすべて満たされたにもかかわらずシステムまたは実装に固有の理由で処理に失敗したことを表すアプリケーションエラーを表します。

これは、{{domxref("GPUDevice.popErrorScope")}} および {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} イベントで浮かび上がったエラーの型の一つを表します。

内部エラーは、バリデーションに引っかからず、アウトオブメモリーエラーであると明確に特定できない何かが WebGPU の実装で起きたとき発生します。これは、一般的に、コードが実行しようとした処理が WebGPU で[対応している制限](/ja/docs/Web/API/GPUSupportedLimits)で表すのが難しい点でシステムの制限に引っかかったことを示します。同じ処理は、他のデバイスでは成功するかもしれません。このようなエラーはパイプラインの生成でのみ発生し、通常はシェーダーがデバイスにとって複雑すぎるとき発生します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("GPUInternalError.GPUInternalError", "GPUInternalError()")}} {{Experimental_Inline}}
  - : 新しい `GPUInternalError` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

親の {{domxref("GPUError")}} から `message` プロパティを継承しています。

- {{domxref("GPUError.message", "message")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : なぜエラーが発生したかを説明する人間向けのメッセージを提供する文字列です。

## 例

以下の例では、エラースコープを用いてバリデーションエラーだと疑われるものをキャプチャし、コンソールに記録します。

```js
device.pushErrorScope("internal");

const module = device.createShaderModule({
  code: shader, // **非常に**複雑なシェーダー
});

device.popErrorScope().then((error) => {
  if (error) {
    // error は GPUInternalError オブジェクトのインスタンス
    module = null;
    console.error(`シェーダーの作成時にエラー発生: ${error.message}`);
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
