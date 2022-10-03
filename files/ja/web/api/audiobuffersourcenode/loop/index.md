---
title: AudioBufferSourceNode.loop
slug: Web/API/AudioBufferSourceNode/loop
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioBufferSourceNode") }} の `loop` プロパティは、 {{domxref("AudioBuffer")}} の末端に達した時に、音声を繰り返し再生するべきかを示す論理値です。

`loop` プロパティの既定値は `false`です。

## 構文

```
var loopingEnabled = AudioBufferSourceNode.loop;
AudioBufferSourceNode.loop = true | false;
```

### 値

繰り返しが有効な場合はブール値 `true` 、それ以外は `false`です。

ループが有効である場合、 {{domxref("AudioBufferSourceNode.start", "start()")}} が呼ばれると音声は開始点として指定された場所から再生されます。 {{domxref("AudioBufferSourceNode.loopEnd", "loopEnd")}} で指定された場所に達すると、音声は {{domxref("AudioBufferSourceNode.loopStart", "loopStart")}} で指定された地点に戻って再生され続けます。

## 例

この例では、 {{domxref("AudioContext.decodeAudioData")}} 関数は音声トラックをデコードし {{domxref("AudioBufferSourceNode")}} に追加するために使用されています。再生・停止のためにボタンが配置され、スライダーが `playbackRate` プロパティを逐次変更するために使用されています。音声はループして再生されます。

> **メモ:** [実際に動作する例を見る](https://mdn.github.io/webaudio-examples/decode-audio-data/) ([または、ソースコードを見る](https://github.com/mdn/webaudio-examples/blob/master/decode-audio-data/index.html))ことができます。

```js
function getData() {
  source = audioCtx.createBufferSource();
  request = new XMLHttpRequest();

  request.open('GET', 'viper.ogg', true);

  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, function(buffer) {
        myBuffer = buffer;
        source.buffer = myBuffer;
        source.playbackRate.value = playbackControl.value;
        source.connect(audioCtx.destination);
        source.loop = true;
      },

      function(e){"Error with decoding audio data" + e.err});

  }

  request.send();
}

// wire up buttons to stop and play audio, and range slider control

play.onclick = function() {
  getData();
  source.start(0);
  play.setAttribute('disabled', 'disabled');
  playbackControl.removeAttribute('disabled');
}
```

## 仕様書

| 仕様書                                                                                           | 状態                                 | 備考 |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ---- |
| {{SpecName('Web Audio API', '#widl-AudioBufferSourceNode-loop', 'loop')}} | {{Spec2('Web Audio API')}} |      |

## ブラウザーの対応

{{Compat("api.AudioBufferSourceNode.loop")}}

## 関連情報

- [Web Audio API](/ja/docs/Web/API/Web_Audio_API)
- [Web Audio API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioBufferSourceNode")}}
