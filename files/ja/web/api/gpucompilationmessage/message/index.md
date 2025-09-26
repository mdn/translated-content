---
title: "GPUCompilationMessage: message プロパティ"
slug: Web/API/GPUCompilationMessage/message
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("GPUCompilationMessage")}} インターフェイスの読み取り専用プロパティ **`message`** は、人間向けのメッセージテキストを表す文字列です。

## 値

文字列です。

## 例

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.message);
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
