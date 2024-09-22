---
title: AudioListener
slug: Web/API/AudioListener
l10n:
  sourceCommit: 4e9294d45c5d338be7799cc6d65f1867b87d7fc0
---

{{ APIRef("Web Audio API") }}

`AudioListener` インターフェイスは、この音場を聞いている固有の人物の位置と方向を表し、それが[音声空間処理](/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)に使用されます。すべての {{domxref("PannerNode")}} は、 {{domxref("BaseAudioContext.listener")}} 属性に格納されている `AudioListener` からの相対で空間化されます。

注意点としては、聞き手は 1 つのコンテキストにつき 1 人しかおらず、{{domxref("AudioNode")}} ではないことです。

![AudioListener の位置、上方、前方ベクトルを、上方・前方ベクトルが互いに 90° になるように表示したものです。](webaudiolistenerreduced.png)

## インスタンスプロパティ

> [!NOTE]
> position、forward、up の値の設定と取得は異なる構文で行われます。取得は例えば `AudioListener.positionX` にアクセスすることで行われ、同じプロパティを設定するには `AudioListener.positionX.value` を使用することで行われます。仕様書の IDL でこれらの値が読み取り専用とマークされていないのはこのためです。

- {{domxref("AudioListener.positionX")}}
  - : 右直交座標系における聞き手の水平位置を表します。既定値は 0 です。
- {{domxref("AudioListener.positionY")}}
  - : 右直交座標系における聞き手の垂直位置を表します。既定値は 0 です。
- {{domxref("AudioListener.positionZ")}}
  - : 右直交座標系における聞き手の距離方向（前後）の位置を表します。既定値は 0 です。
- {{domxref("AudioListener.forwardX")}}
  - : 位置 (`positionX`, `positionY`, `positionZ`) の値と同じ直交座標系における聞き手の前方向の水平位置を表します。 前方向と上方向の値は互いに線形的に独立しています。既定値は 0 です。
- {{domxref("AudioListener.forwardY")}}
  - : 位置 (`positionX`, `positionY`, `positionZ`) の値と同じ直交座標系における聞き手の前方向の垂直位置を表します。 前方向と上方向の値は互いに線形的に独立しています。既定値は 0 です。
- {{domxref("AudioListener.forwardZ")}}
  - : 位置 (`positionX`, `positionY`, `positionZ`) の値と同じ直交座標系における聞き手の前方向の距離方向（前後）の位置を表します。 前方向と上方向の値は互いに線形的に独立しています。既定値は -1 です。
- {{domxref("AudioListener.upX")}}
  - : 位置 (`positionX`, `positionY`, `positionZ`) の値と同じ直交座標系における、聞き手の上方向の水平位置を表します。 前方向と上方向の値は互いに線形的に独立しています。既定値は 0 です。
- {{domxref("AudioListener.upY")}}
  - : 位置 (`positionX`, `positionY`, `positionZ`) の値と同じ直交座標系における、聞き手の上方向の垂直位置を表します。 前方向と上方向の値は互いに線形的に独立しています。既定値は 1 です。
- {{domxref("AudioListener.upZ")}}
  - : 位置 (`positionX`, `positionY`, `positionZ`) の値と同じ直交座標系における、聞き手の上方向の縦方向（前後）の位置を表します。 前方向と上方向の値は互いに線形的に独立しています。既定値は 0 です。

## インスタンスメソッド

- {{domxref("AudioListener.setOrientation()")}} {{deprecated_inline}}
  - : 聞き手の向きを設定します。
- {{domxref("AudioListener.setPosition()")}} {{deprecated_inline}}
  - : 聞き手の位置を設定します。

> [!NOTE]
> これらのメソッドは非推奨ですが、現在、 Firefox で方向と位置を設定するための唯一の方法となっています。

## 非推奨の機能

`setOrientation()` および `setPosition()` メソッドは、それらのプロパティ値を同等に設定することで置き換えられました。 例えば、 `setPosition(x, y, z)` は、それぞれ `positionX.value`, `positionY.value` および `positionZ.value` を設定することによって実現できます。

## 例

サンプルコードは [`BaseAudioContext.createPanner()`](/ja/docs/Web/API/BaseAudioContext/createPanner#例) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
