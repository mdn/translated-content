---
title: "PannerNode: rolloffFactor プロパティ"
short-title: rolloffFactor
slug: Web/API/PannerNode/rolloffFactor
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{ APIRef("Web Audio API") }}

`rolloffFactor` は {{ domxref("PannerNode") }} インターフェイスのプロパティで、ソースがリスナーから離れるにつれて音量が縮小する速さを記述する倍精度浮動小数点値です。この値はすべての距離モデルで使用します。 `rolloffFactor` プロパティの既定値は `1` です。

## 値

数値で、その範囲はパナーの {{ domxref("PannerNode.distanceModel", "distanceModel") }} によって変わり、以下の通りとなります（負の値は許されません）。

- "`linear`"
  - : 0 から 1 までの範囲です。
- "`inverse`"
  - : 0 から `Infinity` までの範囲です。
- "`exponential`"
  - : 0 から `Infinity` までの範囲です。

### 例外

- {{jsxref("RangeError")}}
  - : プロパティに受け入れられる範囲外の値が指定された場合に発生します。

## 例

この例では、 {{ domxref("PannerNode.rolloffFactor", "rolloffFactor") }} の値の違いによって、リスナーからの距離が離れるにつれて、テストトーンの音量がどのように減少していくかを示しています：

```js
const context = new AudioContext();
// all our test tones will last this many seconds
const NOTE_LENGTH = 4;
// this is how far we'll move the sound
const Z_DISTANCE = 20;

// this function creates a graph for the test tone with a given rolloffFactor
// and schedules it to move away from the listener along the Z (depth-wise) axis
// at the given start time, resulting in a decrease in volume (decay)
const scheduleTestTone = (rolloffFactor, startTime) => {
  const osc = new OscillatorNode(context);

  const panner = new PannerNode(context);
  panner.rolloffFactor = rolloffFactor;

  // set the initial Z position, then schedule the ramp
  panner.positionZ.setValueAtTime(0, startTime);
  panner.positionZ.linearRampToValueAtTime(Z_DISTANCE, startTime + NOTE_LENGTH);

  osc.connect(panner).connect(context.destination);

  osc.start(startTime);
  osc.stop(startTime + NOTE_LENGTH);
};

// this tone should decay fairly quickly
scheduleTestTone(1, context.currentTime);
// this tone should decay slower than the previous one
scheduleTestTone(0.5, context.currentTime + NOTE_LENGTH);
// this tone should decay only slightly
scheduleTestTone(0.1, context.currentTime + NOTE_LENGTH * 2);
```

このコードを実行すると、波形は次のようになります：

![ウェブオーディオでは、 3 つの発振器の音色を波形で視覚化しています。各発振器は同じ速度で遠ざかりますが、 RolloffFactors が異なるため、音量が減衰します。](screen_shot_2018-10-11_at_23.22.37.png)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [ウェブオーディオ空間化の基本](/ja/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
