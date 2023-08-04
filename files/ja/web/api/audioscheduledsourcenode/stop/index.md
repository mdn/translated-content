---
title: AudioScheduledSourceNode.stop()
slug: Web/API/AudioScheduledSourceNode/stop
l10n:
  sourceCommit: 9ad07c43f42e14278a4040fd554af33699aea632
---

{{ APIRef("Web Audio API") }}

`stop()` は {{domxref("AudioScheduledSourceNode")}} のメソッドは、指定された時刻に音の再生が停止するようにスケジュールします。時刻を指定しない場合は、音は直ちに再生を停止します。

同じノードで `stop()` を呼び出すたびに、以前にスケジュールされた停止時刻のうち、まだ発生していない時刻が指定された時刻に置き換わります。ノードが既に停止している場合、このメソッドは何の効果もありません。

> **メモ:** ノードの予定開始時刻の前に予定停止時刻が発生した場合、ノードは再生を開始しません。

## 構文

```js-nolint
stop()
stop(when)
```

### 引数

- `when` {{optional_inline}}
  - : 音の再生を停止する時刻を、秒単位で指定します。この値は {{domxref("AudioContext")}} がその {{domxref("BaseAudioContext/currentTime", "currentTime")}} 属性に使用しているのと同じ時間座標系で指定されます。この引数を除外したり、 0 を指定したり、負の値を渡したりすると、音の再生が即座に停止します。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidStateNode` {{domxref("DOMException")}}
  - : ノードが {{domxref("AudioScheduledSourceNode.start", "start()")}} の呼び出しによって開始されていない場合に発生します。
- {{jsxref("RangeError")}}
  - : `when` に指定した値が負である場合に発生します。

## 例

この例では、発振器ノードを起動し、すぐに演奏を始め、 1 つ目で演奏を停止するようにスケジュールしています。停止時間は、音声コンテキストの現在時刻を {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} から取り出し、 1 秒を足すことで決定されます。

```js
context = new AudioContext();
osc = context.createOscillator();
osc.connect(context.destination);

/* しばらく後に停止させたい場合は、引数として秒数を指定します。 */

osc.start();
osc.stop(context.currentTime + 1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 参考

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioScheduledSourceNode.start", "start()")}}
- {{domxref("AudioScheduledSourceNode")}}
- {{domxref("AudioBufferSourceNode")}}
- {{domxref("ConstantSourceNode")}}
- {{domxref("OscillatorNode")}}
