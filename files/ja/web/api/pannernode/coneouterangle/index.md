---
title: "PannerNode: coneOuterAngle プロパティ"
short-title: coneOuterAngle
slug: Web/API/PannerNode/coneOuterAngle
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ APIRef("Web Audio API") }}

`coneOuterAngle` は {{ domxref("PannerNode") }} インターフェイスのプロパティで、 {{domxref("PannerNode.coneOuterGain","coneOuterGain")}} プロパティで定義する、倍精度実数値で円錐の外側の体積を一定値だけ減少させる角度を、度単位で記述します。

`coneOuterAngle` プロパティの既定の値は `0` です。

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
