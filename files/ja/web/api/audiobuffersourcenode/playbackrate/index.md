---
title: "AudioBufferSourceNode: playbackRate プロパティ"
short-title: playbackRate
slug: Web/API/AudioBufferSourceNode/playbackRate
l10n:
  sourceCommit: 46a493c75ca423fb4a97613963d51eac3f38980d
---

{{ APIRef("Web Audio API") }}

**`playbackRate`** は {{ domxref("AudioBufferSourceNode") }} インターフェイスのプロパティで、
このプロパティは、音声資産の再生速度を定義する [k-rate](/ja/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}} です。

1.0 の値は、そのサンプリングレートと同じ速度で再生することを示し、 1.0 より小さい値は、よりゆっくりと、1.0 より大きい値は、通常より速く音声を再生することになります。既定値は `1.0` です。
他の値に設定された場合、`AudioBufferSourceNode` は出力に送る前に音声を再サンプリングします。

## 値

この {{domxref("AudioParam.value", "value")}} は、音声の再生レートを元のサンプリングレートに対する十進数の割合で示す浮動小数点型の値です。

44.1 kHz （44,100 サンプル毎秒）でサンプリングされた音声を含むサウンドバッファーを考えてみましょう。いくつかの `playbackRate` の値で何ができるかを見てみましょう。

- `playbackRate` を 1.0 にすると、通常の速度、 44,100 Hz で再生します。
- `playbackRate` を 0.5 にすると、半分の速度、 22,050 Hz で再生します。
- `playbackRate` を 2.0 は音声の再生レートを倍にして 88,200 Hz で再生します。

## 例

### `playbackRate` の設定

この例では、ユーザーが "Play" を押すと、音声トラックを読み込んでデコードし、{{domxref("AudioBufferSourceNode")}} に入れます。

例えば、この例では `loop` プロパティを `true` に設定し、トラックがループして再生されるようにしています。

ユーザーは、`playbackRate` プロパティを[範囲コントロール](/ja/docs/Web/HTML/Reference/Elements/input/range)を使用して設定することができます。

> [!NOTE]
> [実際に動作する例を見る](https://mdn.github.io/webaudio-examples/audio-buffer-source-node/playbackrate/) ([または、ソースコードを見る](https://github.com/mdn/webaudio-examples/tree/main/audio-buffer-source-node/playbackrate))ことができます。

```js
let audioCtx;
let buffer;
let source;

const play = document.getElementById("play");
const stop = document.getElementById("stop");

const playbackControl = document.getElementById("playback-rate-control");
const playbackValue = document.getElementById("playback-rate-value");

async function loadAudio() {
  try {
    // Load an audio file
    const response = await fetch("rnb-lofi-melody-loop.wav");
    // Decode it
    buffer = await audioCtx.decodeAudioData(await response.arrayBuffer());
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
  source.playbackRate.value = playbackControl.value;
  source.start();
  play.disabled = true;
  stop.disabled = false;
  playbackControl.disabled = false;
});

stop.addEventListener("click", () => {
  source.stop();
  play.disabled = false;
  stop.disabled = true;
  playbackControl.disabled = true;
});

playbackControl.oninput = () => {
  source.playbackRate.value = playbackControl.value;
  playbackValue.textContent = playbackControl.value;
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
