---
title: "PannerNode: coneOuterGain プロパティ"
short-title: coneOuterGain
slug: Web/API/PannerNode/coneOuterGain
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ APIRef("Web Audio API") }}

`coneOuterGain` は {{ domxref("PannerNode") }} インターフェイスのプロパティで、インターフェイスは倍精度浮動小数点値で、 {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}} 属性で定義される円錐の外側の体積減少量を記述します。

`coneOuterGain` プロパティの既定値は `0` で、コーンの外側に音が聞こえないことを意味しています。

## 値

倍精度浮動小数点値です。既定値は `0` で、その値は 0 ～ 1 の範囲で指定できます。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : プロパティに受け入れられる範囲 (0-1) の外の値が指定された場合に発生します。

## 例

[`PannerNode.orientationX`](/ja/docs/Web/API/PannerNode/orientationX#例) の例で、 {{domxref("PannerNode")}} の向きの引数を {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}} と {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}} の組み合わせで変更した場合の音量への影響の例を示しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [ウェブオーディオ空間化の基本](/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
