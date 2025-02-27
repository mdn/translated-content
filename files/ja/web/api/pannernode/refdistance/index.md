---
title: "PannerNode: refDistance プロパティ"
short-title: refDistance
slug: Web/API/PannerNode/refDistance
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ APIRef("Web Audio API") }}

`refDistance` は {{ domxref("PannerNode") }} インターフェイスのプロパティで、音声ソースがリスナーから遠ざかるにつれて音量を縮小する参照距離、つまり音量の縮小が効果を始める距離を表す倍精度浮動小数点値です。この値は、すべての距離モデルで使用します。

`refDistance` プロパティの既定値は `1` です。

## 値

非負の数値。値を 0 未満に設定すると {{jsxref("RangeError")}} が発生します。

### 例外

- {{jsxref("RangeError")}}
  - : プロパティに受け入れられる範囲外の値が指定された場合に発生します。

## 例

この例では、{{ domxref("PannerNode.refDistance", "refDistance") }} の値を変えることで、音が聞き手から遠ざかるにつれて音量が減衰する様子を示します。 {{ domxref("PannerNode.rolloffFactor", "rolloffFactor") }} とは異なり、この値を変えると、音が参照点を通過するまで音量の減衰されます。

```js
const context = new AudioContext();
// all our test tones will last this many seconds
const NOTE_LENGTH = 6;
// this is how far we'll move the sound
const Z_DISTANCE = 20;

// this function creates a graph for the test tone with a given refDistance
// and schedules it to move away from the listener along the Z (depth-wise) axis
// at the given start time, resulting in a decrease in volume (decay)
const scheduleTestTone = (refDistance, startTime) => {
  const osc = new OscillatorNode(context);

  const panner = new PannerNode(context);
  panner.refDistance = refDistance;

  // set the initial Z position, then schedule the ramp
  panner.positionZ.setValueAtTime(0, startTime);
  panner.positionZ.linearRampToValueAtTime(Z_DISTANCE, startTime + NOTE_LENGTH);

  osc.connect(panner).connect(context.destination);

  osc.start(startTime);
  osc.stop(startTime + NOTE_LENGTH);
};

// this tone should decay immediately and fairly quickly
scheduleTestTone(1, context.currentTime);
// this tone should decay slower and later than the previous one
scheduleTestTone(4, context.currentTime + NOTE_LENGTH);
// this tone should decay only slightly, and only start decaying fairly late
scheduleTestTone(7, context.currentTime + NOTE_LENGTH * 2);
```

このコードを実行すると、波形は次のようになります。

![ウェブオーディオで生み出される、 3 つの発振器音の波形を視覚化したものです。それぞれの発振器は同じ速度でリスナーから遠ざかっていきますが、 refDistances が異なるため、結果として音量が減衰します。](screen_shot_2018-10-11_at_23.14.32.png)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [ウェブオーディオ空間化の基本](/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
