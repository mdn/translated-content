---
title: "GPU: wgslLanguageFeatures プロパティ"
slug: Web/API/GPU/wgslLanguageFeatures
l10n:
  sourceCommit: cf57e1e1e1756fec85425d01294ffeabc3b5b451
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}

{{domxref("GPU")}} インターフェイスの読み取り専用プロパティ **`wgslLanguageFeatures`** は、この WebGPU の実装が対応している [WGSL 言語の拡張](https://gpuweb.github.io/gpuweb/wgsl/#language-extension)を報告する {{domxref("WGSLLanguageFeatures")}} オブジェクトを返します。

> [!NOTE]
> API に対応しているすべてのブラウザーの WebGPU ですべての WGSL 言語の拡張が利用可能なわけではありません。使用することを決めたすべての拡張を徹底的にテストすることを推奨します。

## 値

{{domxref("WGSLLanguageFeatures")}} オブジェクトのインスタンスです。これは [Set 風](/ja/docs/Web/JavaScript/Reference/Global_Objects/Set)オブジェクトです。

## 例

```js
if (!navigator.gpu) {
  throw Error("WebGPU に対応していません。");
}

const wgslFeatures = navigator.gpu.wgslLanguageFeatures;

// 集合のサイズを返す
console.log(wgslFeatures.size);

// values() を用いて集合の要素すべてを走査する
const valueIterator = wgslFeatures.values();
for (const value of valueIterator) {
  console.log(value);
}

// ...
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebGPU API](/ja/docs/Web/API/WebGPU_API)
