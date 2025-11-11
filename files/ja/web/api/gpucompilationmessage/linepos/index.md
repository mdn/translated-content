---
title: "GPUCompilationMessage: linePos プロパティ"
slug: Web/API/GPUCompilationMessage/linePos
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

{{domxref("GPUCompilationMessage")}} インターフェイスの読み取り専用プロパティ **`linePos`** は、メッセージが対応するコードの行内の位置を表す数値です。これは点であることも、関係する部分文字列の始点であることもあります。

## 値

数値です。

正確には、`linePos` は行の始点から、メッセージが対応する点または関係する部分文字列の始点までの UTF-16 コードユニットの数です。

以下の点に注意してください。

- メッセージが部分文字列に対応している場合は、`linePos` はその部分文字列の最初の UTF-16 コードユニットを指します。
- メッセージがコード内の特定の位置に対応しない場合 (シェーダーコード全体についてかもしれません) は、`linePos` は 0 になります。
- 値は one-based です。すなわち、値 1 が行内の最初のコードユニットを表します。

## 例

```js
  // ...
  const shaderModule = device.createShaderModule({
    code: shaders,
  });

  const shaderInfo = await shaderModule.getCompilationInfo();
  const firstMessage = shaderInfo.messages[0];
  console.log(firstMessage.linePos);
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
