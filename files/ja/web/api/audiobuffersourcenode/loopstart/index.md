---
title: "AudioBufferSourceNode: loopStart プロパティ"
short-title: loopStart
slug: Web/API/AudioBufferSourceNode/loopStart
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ APIRef("Web Audio API") }}

**`loopStart`** は {{domxref("AudioBufferSourceNode")}} インターフェイスのプロパティで、 {{domxref("AudioBuffer")}} の中で再生再開を行うべき場所を秒単位で示す浮動小数点数値です。

`loopStart` プロパティの既定値は `0` です。

## 値

浮動小数点数で、再生中に各ループを始めるべき音声バッファーへのオフセットを秒単位で示します。この値は {{domxref("AudioBufferSourceNode.loop", "loop")}} 引数が `true` のときのみ使用されます。

## 例

### `loopStart` の設定

この例では、ユーザーが "Play" を押すと、音声トラックを読み込んでデコードし、{{domxref("AudioBufferSourceNode")}} に入れます。

例えば、この例では `loop` プロパティを `true` に設定し、トラックがループして再生されるようにしています。

ユーザーは、`loopStart` と `loopEnd` プロパティを[範囲コントロール](/ja/docs/Web/HTML/Reference/Elements/input/range)を使用して設定することができます。

> [!NOTE]
> [実際に動作する例を見る](https://mdn.github.io/webaudio-examples/audio-buffer-source-node/loop/) ([または、ソースコードを見る](https://github.com/mdn/webaudio-examples/tree/main/audio-buffer-source-node/loop))ことができます。

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
