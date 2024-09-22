---
title: "GPUCompilationMessage: length プロパティ"
slug: Web/API/GPUCompilationMessage/length
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("GPUCompilationMessage")}} インターフェイスの読み取り専用プロパティ **`length`** は、メッセージが対応する部分文字列の長さを表す数値です。

## 値

数値です。

正確には、`length` はメッセージが対応するシェーダーコードの部分文字列に含まれる UTF-16 コードユニットの数です。メッセージが部分文字列ではなく単一の点に対応する場合は、`length` は 0 になります。

## 例

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.length);
  // ...
}
```

より詳細な例は、メインの [`GPUCompilationInfo` のページ](/ja/docs/Web/API/GPUCompilationInfo#例)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
