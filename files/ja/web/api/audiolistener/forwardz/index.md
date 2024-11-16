---
title: "AudioListener: forwardZ プロパティ"
short-title: forwardZ
slug: Web/API/AudioListener/forwardZ
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

`forwardZ` は {{ domxref("AudioListener") }} インターフェイスの読み取り専用プロパティで、聞き手が向いている前方向を定義する方向ベクトルの z 値を表す {{domxref("AudioParam")}} です。

> [!NOTE]
> The parameter is _a-rate_ when used with a {{domxref("PannerNode")}} whose {{domxref("PannerNode.panningModel", "panningModel")}} is set to equalpower, or _k-rate_ otherwise.

## 値

{{domxref("AudioParam")}} です。既定値は -1 で、正の無限大から負の無限大の範囲になります。

## 例

サンプルコードは [`BaseAudioContext.createPanner()`](/ja/docs/Web/API/BaseAudioContext/createPanner#例) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
