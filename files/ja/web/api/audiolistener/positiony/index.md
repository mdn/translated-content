---
title: "AudioListener: positionY プロパティ"
short-title: positionY
slug: Web/API/AudioListener/positionY
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

`positionY` は {{ domxref("AudioListener") }} インターフェイスの読み取り専用プロパティで、3D 直行空間における聞き手の y 位置を表す {{domxref("AudioParam")}} です。

> [!NOTE]
> この引数は {{domxref("PannerNode")}} の {{domxref("PannerNode.panningModel", "panningModel")}} が equalpower に設定されているものと一緒に使用された場合は _a-rate_、そうでない場合は _k-rate_ となります。

## 値

An {{domxref("AudioParam")}}. Its default value is 0, and it can range between positive and negative infinity.

## 例

サンプルコードは [`BaseAudioContext.createPanner()`](/ja/docs/Web/API/BaseAudioContext/createPanner#例) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
