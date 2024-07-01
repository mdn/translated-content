---
title: "AudioBufferSourceNode: loop プロパティ"
short-title: loop
slug: Web/API/AudioBufferSourceNode/loop
l10n:
  sourceCommit: 32f666e453bdb8c93d305075453b6e304cae94de
---

{{ APIRef("Web Audio API") }}

`loop` は {{ domxref("AudioBufferSourceNode") }} のプロパティで、 {{domxref("AudioBuffer")}} の末端に達した時に、音声を繰り返し再生するべきかを示す論理値です。

`loop` プロパティの既定値は `false`です。

### 値

論理値で、繰り返しが有効な場合は `true` 、それ以外は `false` です。

ループが有効である場合、 {{domxref("AudioBufferSourceNode.start", "start()")}} が呼ばれると音声は開始点として指定された場所から再生されます。 {{domxref("AudioBufferSourceNode.loopEnd", "loopEnd")}} で指定された場所に達すると、音声は {{domxref("AudioBufferSourceNode.loopStart", "loopStart")}} で指定された地点に戻って再生され続けます。

## 例

### `loop` の設定

この例では、ユーザーが "Play" を押すと、音声トラックを読み込んでデコードし、{{domxref("AudioBufferSourceNode")}} に入れます。

例えば、この例では `loop` プロパティを `true` に設定し、トラックがループして再生されるようにしています。

ユーザーは、`loopStart` と `loopEnd` プロパティを[範囲コントロール](/ja/docs/Web/HTML/Element/input/range)を使用して設定することができます。

> **メモ:** [実際に動作する例を見る](https://mdn.github.io/webaudio-examples/audio-buffer-source-node/loop/) ([または、ソースコードを見る](https://github.com/mdn/webaudio-examples/tree/main/audio-buffer-source-node/loop))ことができます。

```js
let audioCtx;
let buffer;
let source;

const play = document.getElementById("play");
const stop = document.getElementById("stop");

const loopstartControl = document.getElementById("loopstart-control");
const loopstartValue = document.getElementById("loopstart-value");

const loopendControl = document.getElementById("loopend-control");
const loopendValue = document.getElementById("loopend-value");

async function loadAudio() {
  try {
    // Load an audio file
    const response = await fetch("rnb-lofi-melody-loop.wav");
    // Decode it
    buffer = await audioCtx.decodeAudioData(await response.arrayBuffer());
    const max = Math.floor(buffer.duration);
    loopstartControl.setAttribute("max", max);
    loopendControl.setAttribute("max", max);
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}

play.addEventListener("click", async () => {
  if (!audioCtx) {
    audioCtx = new AudioContext();
    await loadAudio();
  }
  source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.loop = true;
  source.loopStart = loopstartControl.value;
  source.loopEnd = loopendControl.value;
  source.start();
  play.disabled = true;
  stop.disabled = false;
  loopstartControl.disabled = false;
  loopendControl.disabled = false;
});

stop.addEventListener("click", () => {
  source.stop();
  play.disabled = false;
  stop.disabled = true;
  loopstartControl.disabled = true;
  loopendControl.disabled = true;
});

loopstartControl.addEventListener("input", () => {
  source.loopStart = loopstartControl.value;
  loopstartValue.textContent = loopstartControl.value;
});

loopendControl.addEventListener("input", () => {
  source.loopEnd = loopendControl.value;
  loopendValue.textContent = loopendControl.value;
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioBufferSourceNode")}}
