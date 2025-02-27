---
title: "PannerNode: distanceModel プロパティ"
short-title: distanceModel
slug: Web/API/PannerNode/distanceModel
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ APIRef("Web Audio API") }}

`distanceModel` は {{ domxref("PannerNode") }} インターフェイスのプロパティで、音声ソースがリスナーから遠ざかるにつれて音量を縮小するために使用するアルゴリズムを決定する列挙値です。

取りうる値は次の通りです。

- `linear`: 線形距離モデルで、距離によって誘発されるゲインを計算します。
  `1 - rolloffFactor * (distance - refDistance) / (maxDistance - refDistance)`
- `inverse`: 逆距離モデルで、距離によって誘発されるゲインを計算します。
  `refDistance / (refDistance + rolloffFactor * (Math.max(distance, refDistance) - refDistance))`
- `exponential`: 指数距離モデルで、距離によって誘発されるゲインを計算します。
  `pow((Math.max(distance, refDistance) / refDistance, -rolloffFactor)`.

`inverse` が `distanceModel` の既定値です。

## 値

列挙型です。 [`DistanceModelType`](https://webaudio.github.io/web-audio-api/#idl-def-DistanceModelType) を参照してください。

## 例

例のコードのについては [`BaseAudioContext.createPanner()`](/ja/docs/Web/API/BaseAudioContext/createPanner#examples) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [ウェブオーディオ空間化の基本](/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
