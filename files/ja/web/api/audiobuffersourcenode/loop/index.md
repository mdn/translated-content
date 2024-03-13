---
title: AudioBufferSourceNode.loop
slug: Web/API/AudioBufferSourceNode/loop
l10n:
  sourceCommit: 02e1bfcad5fd0de845fb033d331c3c027afa2d6e
---

{{ APIRef("Web Audio API") }}

`loop` は {{ domxref("AudioBufferSourceNode") }} のプロパティで、 {{domxref("AudioBuffer")}} の末端に達した時に、音声を繰り返し再生するべきかを示す論理値です。

`loop` プロパティの既定値は `false`です。

### 値

論理値で、繰り返しが有効な場合は `true` 、それ以外は `false` です。

ループが有効である場合、 {{domxref("AudioBufferSourceNode.start", "start()")}} が呼ばれると音声は開始点として指定された場所から再生されます。 {{domxref("AudioBufferSourceNode.loopEnd", "loopEnd")}} で指定された場所に達すると、音声は {{domxref("AudioBufferSourceNode.loopStart", "loopStart")}} で指定された地点に戻って再生され続けます。

## 例

この例では、 {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} 関数は音声トラックをデコードし {{domxref("AudioBufferSourceNode")}} に追加するために使用されています。再生・停止のためにボタンが配置され、スライダーが `playbackRate` プロパティを逐次変更するために使用されています。音声はループして再生されます。

> **メモ:** [実際に動作する例を見る](https://mdn.github.io/webaudio-examples/decode-audio-data/) ([または、ソースコードを見る](https://github.com/mdn/webaudio-examples/blob/master/decode-audio-data/index.html))ことができます。

```js
function getData() {
  source = audioCtx.createBufferSource();
  request = new XMLHttpRequest();

  request.open("GET", "viper.ogg", true);

  request.responseType = "arraybuffer";

  request.onload = () => {
    const audioData = request.response;

    audioCtx.decodeAudioData(
      audioData,
      (buffer) => {
        myBuffer = buffer;
        source.buffer = myBuffer;
        source.playbackRate.value = playbackControl.value;
        source.connect(audioCtx.destination);
        source.loop = true;
      },

      (e) => console.error(`Error with decoding audio data: ${e.err}`),
    );
  };

  request.send();
}

// wire up buttons to stop and play audio, and range slider control

play.onclick = () => {
  getData();
  source.start(0);
  play.setAttribute("disabled", "disabled");
  playbackControl.removeAttribute("disabled");
};
```

## 仕様書

{{Specifications}}

## ブラウザーの対応

{{Compat}}

## 関連情報

- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioBufferSourceNode")}}
