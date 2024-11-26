---
title: GPUValidationError
slug: Web/API/GPUValidationError
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("WebGPU API", "WebGPU API", "", "nocode")}} の **`GPUValidationError`** インターフェイスは、操作が WebGPU API のバリデーションの制約を満たさなかったことを表すアプリケーションエラーを表現します。

これは、{{domxref("GPUDevice.popErrorScope")}} および {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}} イベントで浮かび上がったエラーの型の一つを表します。

バリデーションエラーは、WebGPU の呼び出し時に無効な入力が与えられると常に発生します。これらは一貫性があり、予測可能で、正しく作られたアプリケーションでは発生しないはずです。これらはコードを実行するどのデバイスでも同じように発生するので、一旦開発中に現れたエラーをすべて修正したら、ほとんどの期間これらを直接観測しなくてよいでしょう。このルールの例外はユーザーが提供するアセットやシェーダーなどを用いる場合で、この場合は読み込み時のバリデーションエラーの監視が役立つでしょう。

> [!NOTE]
> それが適切な場合、WebGPU のコードでバリデーションエラーが発生する理由を理解する助けとなる有用な情報を「バリデーション」節で提供しようとしています。これは、バリデーションエラーを回避するために満たすべき条件のリストです。例として、[`GPUDevice.createBindGroup()` の「バリデーション」節](/ja/docs/Web/API/GPUDevice/createBindGroup#バリデーション)を見てください。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("GPUValidationError.GPUValidationError", "GPUValidationError()")}} {{Experimental_Inline}}
  - : 新しい `GPUValidationError` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

親の {{domxref("GPUError")}} から `message` プロパティを継承します。

- {{domxref("GPUError.message", "message")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : なぜエラーが起きたのかを説明する人間向けのメッセージを提供する文字列です。

## 例

以下の例では、エラースコープを用いてバリデーションエラーの可能性があるものをキャプチャし、コンソールに記録します。

```js
device.pushErrorScope("validation");

let sampler = device.createSampler({
  maxAnisotropy: 0, // 無効、maxAnisotropy は 1 以上でなければならない
});

device.popErrorScope().then((error) => {
  if (error) {
    // error は GPUValidationError オブジェクトのインスタンス
    sampler = null;
    console.error(`サンプラーの生成時にエラー発生: ${error.message}`);
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
