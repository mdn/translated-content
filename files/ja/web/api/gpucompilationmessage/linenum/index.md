---
title: "GPUCompilationMessage: lineNum プロパティ"
slug: Web/API/GPUCompilationMessage/lineNum
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("GPUCompilationMessage")}} インターフェイスの読み取り専用プロパティ **`lineNum`** は、メッセージが対応するシェーダーコードの行番号を表す数値です。

## 値

数値です。

以下の点に注意してください。

- メッセージが部分文字列に対応する場合は、`lineNum` は部分文字列の始点の行番号を表します。
- メッセージがコードの特定の行に対応していない場合 (シェーダーコード全体についてかもしれません) は、`lineNum` は 0 になります。
- 値は one-based です。すなわち、値 1 がコードの最初の行を表します。
- 行は改行で分割されます。WGSL では、[特定の文字のリスト](https://gpuweb.github.io/gpuweb/wgsl/#line-break)が改行として定義されています。

## 例

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.lineNum);
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
