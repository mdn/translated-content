---
title: "AudioBufferSourceNode: loopEnd プロパティ"
short-title: loopEnd
slug: Web/API/AudioBufferSourceNode/loopEnd
l10n:
  sourceCommit: 32f666e453bdb8c93d305075453b6e304cae94de
---

{{ APIRef("Web Audio API") }}

`loopEnd` は {{ domxref("AudioBufferSourceNode") }} インターフェイスのプロパティで、 {{domxref("AudioBuffer")}} の再生が {{domxref("AudioBufferSourceNode.loopStart", "loopStart")}} プロパティで示される時刻にループで戻るオフセットを秒単位で指定する浮動小数点の数値です。
これは {{domxref("AudioBufferSourceNode.loop", "loop")}} プロパティが `true` である場合にのみ使用されます。

## 値

各ループがループの最初に戻る（つまり、現在の再生時刻が {{domxref("AudioBufferSourceNode.loopStart")}} にリセットされる）音声バッファー内のオフセットを、秒単位で示した浮動小数点の数値です。このプロパティは {{domxref("AudioBufferSourceNode.loop", "loop")}} プロパティが `true` である場合にのみ使用されます。

既定値は 0 です。

## 例

### `loopEnd` の設定

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

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
