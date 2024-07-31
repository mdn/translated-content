---
title: "AudioListener: forwardX プロパティ"
short-title: forwardX
slug: Web/API/AudioListener/forwardX
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

`forwardX` は {{ domxref("AudioListener") }} インターフェイスの読み取り専用プロパティで、聞き手が向いている前方向を定義する方向ベクトルの x 値を表す {{domxref("AudioParam")}} です。

> [!NOTE]
> この引数は {{domxref("PannerNode")}} の {{domxref("PannerNode.panningModel", "panningModel")}} が equalpower に設定されているものと一緒に使用された場合は _a-rate_、そうでない場合は _k-rate_ となります。

## 値

{{domxref("AudioParam")}} です。既定値は 0 で、正の無限大から負の無限大の範囲になります。

## 例

サンプルコードは [`BaseAudioContext.createPanner()`](/ja/docs/Web/API/BaseAudioContext/createPanner#例) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
