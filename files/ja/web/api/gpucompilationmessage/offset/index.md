---
title: "GPUCompilationMessage: offset プロパティ"
slug: Web/API/GPUCompilationMessage/offset
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("GPUCompilationMessage")}} インターフェイスの読み取り専用プロパティ **`offset`** は、シェーダーコードの始点から、メッセージが対応する点または関連する部分文字列の始点までのオフセットを表す数値です。

## 値

数値です。

正確には、`offset` はシェーダーコードの始点から、メッセージが対応する点または関連する部分文字列の始点までの UTF-16 コードユニットの数です。

メッセージが特定のコード位置に対応しない場合 (シェーダーコード全体についてかもしれません) は、`offset` は 0 になります。

## 例

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.offset);
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
