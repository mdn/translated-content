---
title: "GPUCompilationMessage: type プロパティ"
slug: Web/API/GPUCompilationMessage/type
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("GPUCompilationMessage")}} インターフェイスの読み取り専用プロパティ **`type`** は、メッセージの種類を表す列挙値です。それぞれの種類が異なる深刻度を表します。

## 値

列挙値です。以下の値をとりえます。

- `"error"`
  - : コンパイルが成功できなくなる、シェーダー生成エラーです。
- `"info"`
  - : 参考になるだけのメッセージで、深刻度は低いです。
- `"warning"`
  - : コンパイルが成功しないわけではないが、開発者の注意を引くことが有益な問題についての警告です。たとえば、非推奨の関数や文法の使用についてです。

## 例

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.type);
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
