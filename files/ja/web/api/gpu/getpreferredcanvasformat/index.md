---
title: "GPU: getPreferredCanvasFormat() メソッド"
slug: Web/API/GPU/getPreferredCanvasFormat
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("GPU")}} インターフェイスの **`getPreferredCanvasFormat()`** メソッドは、現在のシステムにおける 8 ビット深度で通常のダイナミックレンジのコンテンツを表示する用の最適なキャンバステクスチャーの形式を返します。

これは、{{domxref("GPUCanvasContext.configure()")}} を呼び出す際に `format` の値を現在のシステムで最適なものにするためによく用いられます。これは推奨される方法です。キャンバスコンテキストを設定する際に適した形式を用いないと、プラットフォームによっては、テクスチャーのコピーが増えるなどの追加のオーバーヘッドが発生する可能性があります。

## 構文

```js-nolint
getPreferredCanvasFormat()
```

### 引数

なし

### 返値

キャンバステクスチャーの形式を表す文字列です。`rgba8unorm` および `bgra8unorm` を取りえます。

### 例外

なし

## 例

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
