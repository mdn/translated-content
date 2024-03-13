---
title: AudioBufferSourceNode.loopStart
slug: Web/API/AudioBufferSourceNode/loopStart
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{ APIRef("Web Audio API") }}

**`loopStart`** は {{ domxref("AudioBufferSourceNode") }} インターフェイスのプロパティで、 {{domxref("AudioBuffer")}} の中で再生再開を行うべき場所を秒単位で示す浮動小数点数値です。

`loopStart` プロパティの既定値は `0` です。

## 値

浮動小数点数で、再生中に各ループを始めるべき音声バッファーへのオフセットを秒単位で示します。この値は {{domxref("AudioBufferSourceNode.loop", "loop")}} 引数が `true` のときのみ使用されます。

## 例

この例では、 {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} 関数を使用して音声トラックをデコードし、 {{domxref("AudioBufferSourceNode")}} に入れています。音声の再生と停止にはボタンが指定され、`playbackRate`、`loopStart`、`loopEnd` のプロパティをその場で変更するためにスライダーコントロールが使用されます。

音声が最後まで再生されるとループしますが、 `loopStart` と `loopEnd` を変更することによってループの長さを制御することができます。例えば、それらの値をそれぞれ 20 と 25 に設定すると、音声はトラックの 20 秒から 25 秒の間でループを始めることになります。

> **メモ:** 動作する完全な例は、[このコードをライブで実行](https://mdn.github.io/webaudio-examples/decode-audio-data/)するか、[ソースを表示](https://github.com/mdn/webaudio-examples/tree/master/decode-audio-data)することができます。.

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
        songLength = buffer.duration;
        source.buffer = myBuffer;
        source.playbackRate.value = playbackControl.value;
        source.connect(audioCtx.destination);
        source.loop = true;

        loopstartControl.setAttribute("max", Math.floor(songLength));
        loopendControl.setAttribute("max", Math.floor(songLength));
      },

      (e) => console.error(`Error with decoding audio data: ${e.err}`),
    );
  };

  request.send();
}

// …

loopstartControl.oninput = () => {
  source.loopStart = loopstartControl.value;
  loopstartValue.innerHTML = loopstartControl.value;
};

loopendControl.oninput = () => {
  source.loopEnd = loopendControl.value;
  loopendValue.innerHTML = loopendControl.value;
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
