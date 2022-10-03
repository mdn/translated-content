---
title: AudioDestinationNode.maxChannelCount
slug: Web/API/AudioDestinationNode/maxChannelCount
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioDestinationNode") }}インターフェースの`maxchannelCount`プロパティは、`unsigned long`で表された物理的なデバイスが扱えるチャンネルの最大数です。

{{domxref("AudioNode.channelCount")}}プロパティは 0 からこの値の間(両端を含む)です。もし{{domxref("OfflineAudioContext")}}のように`maxChannelCount`が 0 ならば、チャンネルの数は変えられません。

## 構文

```js
var audioCtx = new AudioContext();
var myDestination = audioCtx.destination;
myDestination.maxChannelCount = 2;
```

### 値

`unsigned long`

## 例

次の例は単純な設定です。`AudioDestinationNode`の`maxChannelCount`を 2 にしています。

```js
var audioCtx = new AudioContext();
var source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
audioCtx.destination.maxChannelCount = 2;
gainNode.connect(audioCtx.destination);
```

完全な実装は、MDN Web Audio の[Voice-change-o-matic](http://mdn.github.io/voice-change-o-matic/)や[Violent Theremin](http://mdn.github.io/violent-theremin/)のようなサンプルを参考にしてください。

## 使用

| Specification                                                                                                                | Status                               | Comment |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------- |
| {{SpecName('Web Audio API', '#widl-AudioDestinationNode-maxChannelCount', 'maxChannelCount')}} | {{Spec2('Web Audio API')}} |         |

## ブラウザ互換性

{{Compat("api.AudioDestinationNode.maxChannelCount")}}

## 参考

- [Using the Web Audio API](/ja/docs/Web_Audio_API/Using_Web_Audio_API)
