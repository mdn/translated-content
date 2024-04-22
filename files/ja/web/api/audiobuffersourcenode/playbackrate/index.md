---
title: AudioBufferSourceNode.playbackRate
slug: Web/API/AudioBufferSourceNode/playbackRate
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
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

この例では、 {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} 関数を使用して音声トラックをデコードし、 {{domxref("AudioBufferSourceNode")}} に入れています。音声の再生と停止にはボタンが指定され、`playbackRate`、`loopStart`、`loopEnd` のプロパティをその場で変更するためにスライダーコントロールが使用されます。

> **メモ:** 動作する完全な例は、[このコードをライブで実行](https://mdn.github.io/webaudio-examples/decode-audio-data/)するか、[ソースを表示](https://github.com/mdn/webaudio-examples/tree/master/decode-audio-data)することができます。.

```html
<input
  class="playback-rate-control"
  type="range"
  min="0.25"
  max="3"
  step="0.05"
  value="1" />
<span class="playback-rate-value">1.0</span>
```

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

stop.onclick = () => {
  source.stop(0);
  play.removeAttribute("disabled");
  playbackControl.setAttribute("disabled", "disabled");
};

playbackControl.oninput = () => {
  source.playbackRate.value = playbackControl.value;
  playbackValue.innerHTML = playbackControl.value;
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API)
