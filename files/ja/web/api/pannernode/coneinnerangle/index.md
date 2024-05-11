---
title: "PannerNode: coneInnerAngle プロパティ"
short-title: coneInnerAngle
slug: Web/API/PannerNode/coneInnerAngle
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ APIRef("Web Audio API") }}

`coneInnerAngle` は {{ domxref("PannerNode") }} インターフェイスのプロパティで、倍精度実数値で音量が低減しない範囲を内側にもつ円錐体の角度を示します。

`coneInnerAngle` プロパティの既定の値は `360` で、無指向性の音源に適しています。

## 値

倍精度浮動小数点数。

## 例

[`PannerNode.orientationX`](/ja/docs/Web/API/PannerNode/orientationX#例) の例で、 {{domxref("PannerNode")}} の向きの引数を {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}} と {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}} の組み合わせで変更した場合の音量への影響の例を示しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [ウェブオーディオ空間化の基礎知識](/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
