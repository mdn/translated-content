---
title: "PannerNode: positionX プロパティ"
short-title: positionX
slug: Web/API/PannerNode/positionX
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ APIRef("Web Audio API") }}

**`positionX`** は {{ domxref("PannerNode")}} インターフェイスのプロパティで、水平軸（左右）に対応する、 3D 直交座標での音声ソースの位置の X 座標を指定します。

完全にベクトルを定義するのは、 ({{domxref("PannerNode.positionX", "positionX")}}, {{domxref("PannerNode.positionY", "positionY")}}, {{domxref("PannerNode.positionZ", "positionZ")}}) で指定された音声ソースの位置と、 ({{domxref("PannerNode.orientationX", "orientationX")}}, {{domxref("PannerNode.orientationY", "orientationY")}}, {{domxref("PannerNode.orientationZ", "orientationZ")}}) で指定された音声ソースの方向（つまり、それが向いている方向）です。

音の指向性（属性 {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}}, {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}}, {{domxref("PannerNode.coneOuterGain", "codeOuterGain")}} を使用して指定）によって、使用する音の方向が、知覚される音量を変えるこ とがあります。音が聞き手の方を向いている場合は、音が聞き手から離れている場合よりも大きくなります。

このプロパティが保持している {{domxref("AudioParam")}} は読み取り専用ですが、 {{domxref("AudioParam.value")}} プロパティに新しい値を割り当てることで、引数の値を変更することができます。

## 値

{{domxref("AudioParam")}} で、その `value` は音声ソースの位置の X 座標（3D 直交座標）です。既定値は 0 です。

## 例

次の例は発振器を発振し、 1 秒後に左に、 2 秒後に右に、 3 秒後に中央にパンします。

```js
const context = new AudioContext();

const osc = new OscillatorNode(context);
const panner = new PannerNode(context);

panner.positionX.setValueAtTime(-1, context.currentTime + 1);
panner.positionX.setValueAtTime(1, context.currentTime + 2);
panner.positionX.setValueAtTime(0, context.currentTime + 3);

osc.connect(panner).connect(context.destination);

osc.start(0);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [ウェブオーディオ空間化の基本](/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- {{domxref("PannerNode")}}
