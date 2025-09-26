---
title: "PannerNode: orientationZ プロパティ"
short-title: orientationZ
slug: Web/API/PannerNode/orientationZ
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ APIRef("Web Audio API") }}

**`orientationY`** は {{ domxref("PannerNode") }} インターフェイスのプロパティで、音声ソースが向いている方向の Z （奥行）成分を 3D 直交座標空間で表示します。

完全ベクトルは ({{domxref("PannerNode.positionX", "positionX")}}、{{domxref("PannerNode.positionY", "positionY")}}、{{domxref("PannerNode.positionZ", "positionZ")}}) として与えられた音声ソースの位置と、({{domxref("PannerNode.orientationX", "orientationX")}}、{{domxref("PannerNode.orientationY", "orientationY")}}、{{domxref("PannerNode.orientationZ", "orientationZ")}}) として与えられた音声ソースの向き (つまり、音声ソースが向いている方向) によって定義されます。

音の指向性（{{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}}、{{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}}、{{domxref("PannerNode.coneOuterGain", "coneOuterGain")}} の属性を使用して指定されている）に応じて、音の方向 (orientation) は、再生中の音が知覚される音量を変化させることがあります。音が聞き手の方に向けられている場合は、聞き手から離れたところに向けられている場合よりも大きな音になります。

このプロパティに含まれる {{domxref("AudioParam")}} は読み取り専用ですが、{{domxref("AudioParam.value")}} プロパティに新しい値を代入することで、引数の値を変更できます。

## 値

{{domxref("AudioParam")}} の `value` は、音声ソースが向いている方向の Z 成分であり、3D 直交座標空間での値です。

## 例

例のコードの付いては [`PannerNode.orientationX`](/ja/docs/Web/API/PannerNode/orientationX#例) を参照してください。これは、 {{domxref("PannerNode")}} の方向引数を {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}} および {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}} と結合して変更した場合の体積への影響を示しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [ウェブオーディオ空間化の基本](/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- {{domxref("PannerNode")}}
