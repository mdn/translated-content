---
title: GPUCompilationInfo
slug: Web/API/GPUCompilationInfo
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("WebGPU API", "WebGPU API", "", "nocode")}} の **`GPUCompilationInfo`** インターフェイスは、シェーダーコードの問題を診断する助けになるように GPU シェーダーモジュールコンパイラーが生成した {{domxref("GPUCompilationMessage")}} オブジェクトの配列を表します。

`GPUCompilationInfo` には、{{domxref("GPUShaderModule.getCompilationInfo()")}} からアクセスできます。

{{InheritanceDiagram}}

## インスタンスプロパティ

- {{domxref("GPUCompilationInfo.messages", "messages")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : {{domxref("GPUCompilationMessage")}} オブジェクトの配列です。それぞれのオブジェクトに、それぞれのシェーダーコンパイルメッセージの詳細が格納されています。メッセージは情報・警告・エラーのいずれかです。

## 例

以下の例では、シェーダーコード内の関数定義からわざとカッコを抜いています。

```js
const shaders = `
struct VertexOut {
  @builtin(position) position : vec4f,
  @location(0) color : vec4f
}

@vertex
fn vertex_main(@location(0) position: vec4f,
               @location(1) color: vec4f -> VertexOut
{
  var output : VertexOut;
  output.position = position;
  output.color = color;
  return output;
}

@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4f
{
  return fragData.color;
}
`;
```

このシェーダーモジュールをコンパイルする際、`getCompilationInfo()` を用いて結果のエラーの情報を取得できます。

```js
async function init() {
  // ...

  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];

  console.log(firstMessage.lineNum); // 9
  console.log(firstMessage.message); // "expected ')' for function declaration"
  console.log(firstMessage.type); // "error"
  // ...
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
