---
title: "AudioParam: cancelScheduledValues() メソッド"
short-title: cancelScheduledValues()
slug: Web/API/AudioParam/cancelScheduledValues
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}

`cancelScheduledValues()` は {{ domxref("AudioParam") }} インターフェイスのメソッドで、 `AudioParam` に予定されている将来の変更をすべて取り消します。

## 構文

```js-nolint
cancelScheduledValues(startTime)
```

### 引数

- `startTime`
  - : {{ domxref("AudioContext") }} が最初に作成されてから、スケジュールされた変更がすべて取り消されるまでの時間（秒単位）を表します。

### 返値

この `AudioParam` オブジェクトへの参照です。古い実装では、このメソッドは {{jsxref('undefined')}} を返します。

## 例

```js
const gainNode = audioCtx.createGain();
gainNode.gain.setValueCurveAtTime(waveArray, audioCtx.currentTime, 2); // 'gain' は AudioParam
gainNode.gain.cancelScheduledValues(audioCtx.currentTime);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
