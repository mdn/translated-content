---
title: AudioBufferSourceNode.loopEnd
slug: Web/API/AudioBufferSourceNode/loopEnd
l10n:
  sourceCommit: 02e1bfcad5fd0de845fb033d331c3c027afa2d6e
---

{{ APIRef("Web Audio API") }}

`loopEnd` は {{ domxref("AudioBufferSourceNode") }} インターフェイスのプロパティで、 {{domxref("AudioBuffer")}} の再生が {{domxref("AudioBufferSourceNode.loopStart", "loopStart")}} プロパティで示される時刻にループで戻るオフセットを秒単位で指定する浮動小数点の数値です。
これは {{domxref("AudioBufferSourceNode.loop", "loop")}} プロパティが `true` である場合にのみ使用されます。

## 値

各ループがループの最初に戻る（つまり、現在の再生時刻が {{domxref("AudioBufferSourceNode.loopStart")}} にリセットされる）音声バッファー内のオフセットを、秒単位で示した浮動小数点の数値です。このプロパティは {{domxref("AudioBufferSourceNode.loop", "loop")}} プロパティが `true` である場合にのみ使用されます。

既定値は 0 です。

## 例

この例では、 {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} 関数を使用して音声トラックをデコードし、 {{domxref("AudioBufferSourceNode")}} へ格納しています。音声の再生と停止にはボタンが指定され、`playbackRate`、`loopStart`、`loopEnd` のプロパティをその場で変更するためにスライダーコントロールが使用されます。

音声を最後まで再生するとループしますが、 `loopStart` と `loopEnd` を変更することによってループの長さを制御することができます。例えば、それらの値をそれぞれ 20 と 25 に設定し、再生を始めると、 25 秒の位置に到達するまで正常に再生されます。そして、現在の再生位置は 20 秒の位置に戻り、 25 秒の位置まで無限に（少なくとも {{domxref("AudioScheduledSourceNode/stop", "stop()")}} が呼び出されるまで）再生し続けるループとなります。

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

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
