---
title: "BaseAudioContext: createDelay() メソッド"
short-title: createDelay()
slug: Web/API/BaseAudioContext/createDelay
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

`createDelay()` は {{domxref("BaseAudioContext")}} インターフェイスのメソッドで、 {{domxref("DelayNode")}} を生成します。これは、入力される音声信号を一定時間遅らせるために使用します。

> **メモ:** {{domxref("DelayNode.DelayNode", "DelayNode()")}} コンストラクターは {{domxref("DelayNode")}} を作成するための推奨される方法です。 [AudioNode の作成](/ja/docs/Web/API/AudioNode#audionode_の生成)を参照してください。

## 構文

```js-nolint
createDelay(maxDelayTime)
```

### 引数

- `maxDelayTime` {{optional_inline}}
  - : 音声信号を遅延させることができる最大時間（秒）を指定します。 180 秒未満である必要があり、指定しない場合は 1 秒が既定値となります。

### 返値

{{domxref("DelayNode")}} です。既定の {{domxref("DelayNode.delayTime")}} は 0 秒です。

## 例

3 つの異なるサンプルを一定のループで再生する簡単な例を作成しました。 [create-delay](https://chrisdavidmills.github.io/create-delay/) をご覧ください（[ソースコードを閲覧](https://github.com/chrisdavidmills/create-delay)することもできます）。再生ボタンを押しただけでは、ループはすぐに始まります。スライダーを右にスライドさせてから再生ボタンを押すと、遅延が導入され、ループする音は短い時間だけ再生を開始しません。

```js
const audioCtx = new AudioContext();

const synthDelay = audioCtx.createDelay(5.0);

// …

let synthSource;

playSynth.onclick = () => {
  synthSource = audioCtx.createBufferSource();
  synthSource.buffer = buffers[2];
  synthSource.loop = true;
  synthSource.start();
  synthSource.connect(synthDelay);
  synthDelay.connect(destination);
  this.setAttribute("disabled", "disabled");
};

stopSynth.onclick = () => {
  synthSource.disconnect(synthDelay);
  synthDelay.disconnect(destination);
  synthSource.stop();
  playSynth.removeAttribute("disabled");
};

// …

let delay1;
rangeSynth.oninput = () => {
  delay1 = rangeSynth.value;
  synthDelay.delayTime.setValueAtTime(delay1, audioCtx.currentTime);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
