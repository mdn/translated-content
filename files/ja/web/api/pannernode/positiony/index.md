---
title: "PannerNode: positionY プロパティ"
short-title: positionY
slug: Web/API/PannerNode/positionY
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ APIRef("Web Audio API") }}

**`positionY`** は {{ domxref("PannerNode")}} インターフェイスのプロパティで、垂直軸（上下）に対応する、 3D 直交座標での音声ソースの位置の Y 座標を指定します。完全にベクトルを定義するのは、 ({{domxref("PannerNode.positionX", "positionX")}}, {{domxref("PannerNode.positionY", "positionY")}}, {{domxref("PannerNode.positionZ", "positionZ")}}) で指定された音声ソースの位置と、 ({{domxref("PannerNode.orientationX", "orientationX")}}, {{domxref("PannerNode.orientationY", "orientationY")}}, {{domxref("PannerNode.orientationZ", "orientationZ")}}) で指定された音声ソースの方向（つまり、それが向いている方向）です。

音の指向性（属性 {{domxref("PannerNode.coneInnerAngle", "coneInnerAngle")}}, {{domxref("PannerNode.coneOuterAngle", "coneOuterAngle")}}, {{domxref("PannerNode.coneOuterGain", "codeOuterGain")}} を使用して指定）によって、使用する音の方向が、知覚される音量を変えることがあります。音が聞き手の方を向いている場合は、音が聞き手から離れている場合よりも大きくなります。

このプロパティが保持している {{domxref("AudioParam")}} は読み取り専用ですが、 {{domxref("AudioParam.value")}} プロパティに新しい値を割り当てることで、引数の値を変更することができます。

## 値

{{domxref("AudioParam")}} で、その `value` は音声ソースの位置の Y 座標（3D 直交座標）です。既定値は 0 です。

## 例

次の例は、発振器を開始し、 1 秒後にリスナーの上へ、 2 秒後にリスナーの下へ、 3 秒後に中央へパンします。この場合、単純なモノラル波なので、変化は主に発振器の音色に影響することに注意してください。

```js
const context = new AudioContext();

const osc = new OscillatorNode(context);
const panner = new PannerNode(context);
panner.panningModel = "HRTF";

panner.positionY.setValueAtTime(1, context.currentTime + 1);
panner.positionY.setValueAtTime(-1, context.currentTime + 2);
panner.positionY.setValueAtTime(0, context.currentTime + 3);

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
