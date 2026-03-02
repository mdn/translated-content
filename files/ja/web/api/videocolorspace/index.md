---
title: VideoColorSpace
slug: Web/API/VideoColorSpace
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

{{domxref('WebCodecs API','','',' ')}} の　**`VideoColorSpace`** インターフェイスは動画の色空間を表します

## コンストラクター

- {{domxref("VideoColorSpace.VideoColorSpace", "VideoColorSpace()")}}
  - : 新しい `VideoColorSpace` を作成します。

## インスタンスプロパティ

- {{domxref("VideoColorSpace.primaries")}} {{ReadOnlyInline}}
  - : ビデオサンプルの {{glossary("gamut")}} 色域を説明するカラープライマリを含む文字列。
- {{domxref("VideoColorSpace.transfer")}}
  - : ビデオサンプルの伝達特性を含む文字列。
- {{domxref("VideoColorSpace.matrix")}}
  - : サンプルコンポーネント値と色座標の関係を示す係数行列を含む文字列。
- {{domxref("VideoColorSpace.fullRange")}}
  - : {{jsxref("Boolean")}}。フルレンジの色値が使われていれば `true` です。

## インスタンスメソッド

- {{domxref("VideoColorSpace.toJSON()")}}
  - : `VideoColorSpace` オブジェクトの JSON を返します。

## 例

次の例では、`colorSpace` は {{domxref("VideoFrame")}} から返された `VideoColorSpace` オブジェクトです。オブジェクトはコンソールに出力されます。

```js
let colorSpace = VideoFrame.colorSpace;
console.log(colorSpace);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
